import { Model, UpdateQuery, QueryFilter } from 'mongoose';
export interface IPaginate {
  page: number;
}

export type finderOneArg<TDocument> = {
  filter?: QueryFilter<TDocument>;
  populate?: any;
  select?: string;
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
};
export abstract class AbstractRepository<TDocument> {
  protected constructor(private readonly model: Model<TDocument>) {}

  async findAll({
    filter = {},
    populate,
    select,
    paginate,
    sort,
  }: findersArg<TDocument>): Promise<TDocument[] | any> {
    let query = this.model.find(filter);
    if (select) query = query.select(select);
    if (populate) query = query.populate(populate);
    if (sort) query = query.sort(sort);
    // 2. منطق تقسيم الصفحات (Pagination)
    if (paginate?.page) {
      const { page } = paginate;
      const limit = 10;
      const skip = (page - 1) * limit;

      // حساب العدد الإجمالي للعناصر بناءً على الاستعلام الحالي
      const totalSize = await query.model.countDocuments(
        query.getQuery() as any,
      );

      // جلب بيانات الصفحة المحددة فقط
      const data = await query.skip(skip).limit(limit).exec();

      return {
        totalSize,
        totalPages: Math.ceil(totalSize / limit),
        pageSize: data.length,
        pageNumber: page,
        data,
      };
    }

    const data = await query.exec();
    return { data };
  }

  async findOne({
    filter = {},
    populate,
    select,
  }: finderOneArg<TDocument>): Promise<TDocument | null> {
    let query = this.model.findOne(filter);
    if (select) query = query.select(select);
    if (populate) query = query.populate(populate);
    return query.exec();
  }

  async create(document: Partial<TDocument>): Promise<TDocument> {
    const doc = await this.model.create({ ...document });
    return doc;
  }

  async update({
    filter,
    update,
    populate,
    select,
  }: updateArgs<TDocument>): Promise<TDocument | null> {
    let query = this.model.findOneAndUpdate(filter, update, {
      new: true,
      runValidators: true,
    });
    if (select) query = query.select(select);
    if (populate) query = query.populate(populate);
    return query.exec();
  }

  async delete(filter: QueryFilter<TDocument>): Promise<TDocument | null> {
    let query = this.model.findOneAndDelete(filter);
    return query.exec();
  }
}
