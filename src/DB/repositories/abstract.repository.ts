import {
  Model,
  UpdateQuery,
  QueryFilter,
  QueryOptions,
  SaveOptions, // <-- 1. تم إضافة SaveOptions
} from 'mongoose';

export interface IPaginate {
  page: number;
  limit?: number;
}

export type finderOneArg<TDocument> = {
  filter?: QueryFilter<TDocument>;
  populate?: any;
  select?: string;
  options?: QueryOptions<TDocument>; // <-- 2. إضافة options لدعم الـ session
};

export type findersArg<TDocument> = finderOneArg<TDocument> & {
  paginate?: IPaginate;
  sort?: any;
};

export type updateArgs<TDocument> = {
  filter: QueryFilter<TDocument>;
  update: UpdateQuery<TDocument>;
  populate?: any;
  select?: string;
  options?: QueryOptions<TDocument>; // موجودة مسبقاً وسنستخدمها
};

export abstract class AbstractRepository<TDocument> {
  protected constructor(private readonly model: Model<TDocument>) {}

  async findAll({
    filter = {},
    populate,
    select,
    paginate,
    sort,
    options, // <-- التقاط الخيارات
  }: findersArg<TDocument>): Promise<TDocument[] | any> {
    // تمرير الخيارات (مثل session) للاستعلام
    let query = this.model.find(filter, null, options);
    if (select) query = query.select(select);
    if (populate) query = query.populate(populate);
    if (sort) query = query.sort(sort);

    const page = paginate?.page ? paginate.page : 1;
    const limit = paginate?.limit ? paginate.limit : 10;
    const skip = (page - 1) * limit;

    const totalSize = await query.model.countDocuments(query.getQuery() as any);
    const data = await query.skip(skip).limit(limit).exec();

    return {
      totalSize,
      totalPages: Math.ceil(totalSize / limit),
      pageSize: data.length,
      pageNumber: page,
      data,
    };
  }

  async findOne({
    filter = {},
    populate,
    select,
    options, // <-- التقاط الخيارات
  }: finderOneArg<TDocument>): Promise<TDocument | null> {
    // تمرير الخيارات للاستعلام
    let query = this.model.findOne(filter, null, options);
    if (select) query = query.select(select);
    if (populate) query = query.populate(populate);
    return query.exec();
  }

  // <-- 3. تحديث دالة Create لتقبل الـ session
  async create(
    document: Partial<TDocument>,
    options?: SaveOptions,
  ): Promise<TDocument> {
    // بناء كائن جديد من الموديل
    const doc = new this.model(document);
    // حفظه وتمرير الـ options (التي تحتوي على الـ session)
    const savedDoc = await doc.save(options);

    // إرجاع النتيجة
    return savedDoc as unknown as TDocument;
  }

  async update({
    filter,
    update,
    populate,
    select,
    options, // <-- التقاط الخيارات
  }: updateArgs<TDocument>): Promise<TDocument | null> {
    // <-- 4. دمج الـ options مع الإعدادات الافتراضية
    let query = this.model.findOneAndUpdate(filter, update, {
      new: true,
      runValidators: true,
      ...options,
    });
    if (select) query = query.select(select);
    if (populate) query = query.populate(populate);
    return query.exec();
  }

  // <-- 5. تحديث دالة Delete لتقبل الخيارات
  async delete(
    filter: QueryFilter<TDocument>,
    options?: QueryOptions<TDocument>,
  ): Promise<TDocument | null> {
    let query = this.model.findOneAndDelete(filter, options);
    return query.exec();
  }

  async findOneAndUpdate(
    filter: QueryFilter<TDocument>,
    update: UpdateQuery<TDocument>,
    options?: QueryOptions<TDocument>, // جعلها اختيارية
  ): Promise<TDocument | null> {
    // <-- 6. دمج الخيارات لضمان عدم ضياع أي إعدادات
    return await this.model.findOneAndUpdate(filter, update, {
      returnDocument: 'after',
      upsert: true,
      ...options,
    });
  }
}
