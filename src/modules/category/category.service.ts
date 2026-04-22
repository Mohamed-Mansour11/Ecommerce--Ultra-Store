import {
  forwardRef,
  Inject,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { FileUploadService } from 'src/common/services/fileupload/fileupload.service';
import { ConfigService } from '@nestjs/config';
import { CreateCategoryDto } from './dto/create-category.dto';
import { Types } from 'mongoose';
import { CategoryRepository } from 'src/DB/repositories/category.repository';
import { nanoid } from 'nanoid';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { ProductService } from '../product/product.service';

@Injectable()
export class CategoryService {
  constructor(
    private readonly _FileUploadService: FileUploadService,
    private readonly _configService: ConfigService,
    private readonly _CategoryRepository: CategoryRepository,
    @Inject(forwardRef(() => ProductService))
    private readonly _ProductService: ProductService,
  ) {}
  //الخدمات والأدوات أو المعدات التي سنستخمها constructor نضع في الـ

  async create(
    data: CreateCategoryDto,
    userId: Types.ObjectId,
    file: Express.Multer.File,
    // فهي المواد الخام التي نستخدمها والتي تختلف باختلاف المطلوب وليــست هي المعدات
  ) {
    // جلب المسار الرئيسي من إعدادات النظام
    const rootfolder = this._configService.get('CLOUD_ROOT_FOLDER');

    //  إنشاء معرف فريد للمجلد الجديد(يمكنك استخدام nanoid كما ظهر في Terminal)
    const cloudFolder = nanoid();

    // رفع الصورة إلى Cloudinary في مجلد مخصص
    const results = await this._FileUploadService.saveFileToCloud([file], {
      folder: `${rootfolder}/category/${cloudFolder}`,
    });

    // حفظ بيانات الفئة في قاعدة البيانات
    const category = await this._CategoryRepository.create({
      name: data.name,
      cloudFolder,
      image: results[0],
      createdBy: userId,
    });

    return { data: category };
  }

  async update(
    categoryId: Types.ObjectId,
    updateCategoryDto: UpdateCategoryDto,
    userId: Types.ObjectId,
  ) {
    // 1. البحث عن الفئة (Category) باستخدام الـ Repository
    const category = await this._CategoryRepository.findOne({
      filter: { _id: categoryId },
    });

    //  التحقق من وجود الفئة، وإذا لم توجد يتم رمي خطأ
    if (!category) {
      throw new NotFoundException(`category with id ${categoryId} not found!`);
    }

    //  DTO تحديث البيانات إذا كانت موجودة في الـ
    // image > (تمت معالجته في دالة أخرى)
    if (updateCategoryDto.name) {
      category.name = updateCategoryDto.name;
      category.updatedBy = userId; // تعيين المستخدم الذي قام بالتحديث
      await category.save(); // حفظ التغييرات في قاعدة البيانات

      // 🔥 3. مسح كاش المنتجات لأن اسم القسم قد تغير (وسيؤثر على الـ Populate)
      await this._ProductService.clearProductCache();
    }

    // 4. إرجاع النتيجة النهائية
    return { data: category };
  }

  async updateImage(
    categoryId: Types.ObjectId,
    file: Express.Multer.File,
    userId: Types.ObjectId,
  ) {
    // 1. التأكد من وجود الفئة في قاعدة البيانات
    const category = await this._CategoryRepository.findOne({
      filter: { _id: categoryId },
    });

    if (!category) {
      throw new NotFoundException(`category with id ${categoryId} not found!`);
    }

    // 2. تحديث الصورة على Cloudinary
    // نرسل الـ public_id القديم لكي يقوم Cloudinary باستبدال الصورة القديمة بنفس المعرف
    const public_id = category.image.public_id;

    // عملية الرفع والاستبدال الذكية
    const results = await this._FileUploadService.saveFileToCloud([file], {
      public_id,
    });

    // 3. تحديث بيانات الفئة في قاعدة البيانات
    category.image = results[0];
    category.updatedBy = userId;
    await category.save();

    // 🔥 مسح الكاش هنا أيضاً (اختياري ولكن يُفضل) في حال كانت صورة القسم تظهر مع بيانات المنتج
    await this._ProductService.clearProductCache();

    return { data: category };
  }

  async remove(categoryId: Types.ObjectId, userId: Types.ObjectId) {
    // 1. البحث عن الفئة للتأكد من وجودها
    const category = await this._CategoryRepository.findOne({
      filter: { _id: categoryId },
    });

    // 2. رمي خطأ إذا لم يتم العثور عليها
    if (!category) {
      throw new NotFoundException(`category with id ${categoryId} not found!`);
    }

    // 3. حذف الفئة من قاعدة البيانات
    await category.deleteOne();

    // 🔥 4. مسح كاش المنتجات لأن القسم الذي تنتمي إليه بعض المنتجات قد تم حذفه
    await this._ProductService.clearProductCache();

    // 5. إرجاع رسالة نجاح
    return { message: 'done' };
  }

  async findOne(categoryId: Types.ObjectId) {
    // البحث عن الفئة باستخدام الـ Repository
    const category = await this._CategoryRepository.findOne({
      filter: { _id: categoryId },
    });

    // إذا لم يتم العثور على الفئة، يتم رمي خطأ 404
    if (!category) {
      throw new NotFoundException(`category with id ${categoryId} not found!`);
    }

    // إرجاع البيانات في حال وجودها
    return { data: category };
  }

  async findAll(page: number) {
    return {
      data: await this._CategoryRepository.findAll({
        populate: [{ path: 'createdBy' }],
        paginate: { page },
      }),
    };
  }
}

// import { Injectable, NotFoundException } from '@nestjs/common';
// import { FileUploadService } from 'src/common/services/fileupload/fileupload.service';
// import { ConfigService } from '@nestjs/config';
// import { CreateCategoryDto } from './dto/create-category.dto';
// import { Types } from 'mongoose';
// import { CategoryRepository } from 'src/DB/repositories/category.repository';
// import { nanoid } from 'nanoid';
// import { UpdateCategoryDto } from './dto/update-category.dto';

// @Injectable()
// export class CategoryService {
//   constructor(
//     private readonly _FileUploadService: FileUploadService,
//     private readonly _configService: ConfigService,
//     private readonly _CategoryRepository: CategoryRepository,
//   ) {}
//   //الخدمات والأدوات أو المعدات التي سنستخمها constructor نضع في الـ

//   async create(
//     data: CreateCategoryDto,
//     userId: Types.ObjectId,
//     file: Express.Multer.File,
//     // فهي المواد الخام التي نستخدمها والتي تختلف باختلاف المطلوب وليــست هي المعدات
//   ) {
//     // جلب المسار الرئيسي من إعدادات النظام
//     const rootfolder = this._configService.get('CLOUD_ROOT_FOLDER');

//     //  إنشاء معرف فريد للمجلد الجديد(يمكنك استخدام nanoid كما ظهر في Terminal)
//     const cloudFolder = nanoid();

//     // رفع الصورة إلى Cloudinary في مجلد مخصص
//     const results = await this._FileUploadService.saveFileToCloud([file], {
//       folder: `${rootfolder}/category/${cloudFolder}`,
//     });

//     // حفظ بيانات الفئة في قاعدة البيانات
//     const category = await this._CategoryRepository.create({
//       name: data.name,
//       cloudFolder,
//       image: results[0],
//       createdBy: userId,
//     });

//     return { data: category };
//   }

//   async update(
//     categoryId: Types.ObjectId,
//     updateCategoryDto: UpdateCategoryDto,
//     userId: Types.ObjectId,
//   ) {
//     // 1. البحث عن الفئة (Category) باستخدام الـ Repository
//     const category = await this._CategoryRepository.findOne({
//       filter: { _id: categoryId },
//     });

//     //  التحقق من وجود الفئة، وإذا لم توجد يتم رمي خطأ
//     if (!category) {
//       throw new NotFoundException(`category with id ${categoryId} not found!`);
//     }

//     //  DTO تحديث البيانات إذا كانت موجودة في الـ
//     // image > (تمت معالجته في دالة أخرى)
//     if (updateCategoryDto.name) {
//       category.name = updateCategoryDto.name;
//       category.updatedBy = userId; // تعيين المستخدم الذي قام بالتحديث
//       await category.save(); // حفظ التغييرات في قاعدة البيانات
//     }

//     // 4. إرجاع النتيجة النهائية
//     return { data: category };
//   }

//   // سيدخل النظام إلى داخل الـ if وينفذ السطر: category.name = updateCategoryDto.name;
//   // بما أن الكائن فارغ، فإن updateCategoryDto.name غير موجودة، وقيمتها برمجياً هي undefined.
//   // الكارثة: أنت الآن قمت بمسح اسم القسم القديم من قاعدة البيانات واستبدلته بـ undefined.
//   // وإذا كان حقل الاسم إجبارياً (Required) في نموذج Mongoose الخاص بك، فسوف ينهار الطلب ويُرجع خطأ

//   async updateImage(
//     categoryId: Types.ObjectId,
//     file: Express.Multer.File,
//     userId: Types.ObjectId,
//   ) {
//     // 1. التأكد من وجود الفئة في قاعدة البيانات
//     const category = await this._CategoryRepository.findOne({
//       filter: { _id: categoryId },
//     });

//     if (!category) {
//       throw new NotFoundException(`category with id ${categoryId} not found!`);
//     }

//     // 2. تحديث الصورة على Cloudinary
//     // نرسل الـ public_id القديم لكي يقوم Cloudinary باستبدال الصورة القديمة بنفس المعرف
//     //:الإمساك بعنوان الصورة القديــــــــمــــــة

//     const public_id = category.image.public_id;
//     // عملية الرفع والاستبدال الذكية
//     const results = await this._FileUploadService.saveFileToCloud([file], {
//       public_id,
//     });
//     //public_id بدون تمرير ال file= لو رفعنا الصورة الجديدة
//     //برفعها كملف جديد كلياً بمعرف جديد ورابط جديد Cloudinary سيقوم

//     // 3. تحديث بيانات الفئة في قاعدة البيانات
//     category.image = results[0];
//     category.updatedBy = userId;
//     await category.save();

//     return { data: category };
//   }

//   async remove(categoryId: Types.ObjectId, userId: Types.ObjectId) {
//     // 1. البحث عن الفئة للتأكد من وجودها
//     const category = await this._CategoryRepository.findOne({
//       filter: { _id: categoryId },
//     });

//     // 2. رمي خطأ إذا لم يتم العثور عليها
//     if (!category) {
//       throw new NotFoundException(`category with id ${categoryId} not found!`);
//     }

//     // 3. حذف الفئة من قاعدة البيانات
//     await category.deleteOne();

//     // 4. إرجاع رسالة نجاح
//     return { message: 'done' };
//   }

//   async findOne(categoryId: Types.ObjectId) {
//     // البحث عن الفئة باستخدام الـ Repository
//     const category = await this._CategoryRepository.findOne({
//       filter: { _id: categoryId },
//     });

//     // إذا لم يتم العثور على الفئة، يتم رمي خطأ 404
//     if (!category) {
//       throw new NotFoundException(`category with id ${categoryId} not found!`);
//     }

//     // إرجاع البيانات في حال وجودها
//     return { data: category };
//   }

//   async findAll(page: number) {
//     return {
//       data: await this._CategoryRepository.findAll({
//         populate: [{ path: 'createdBy' }],
//         paginate: { page },
//       }),
//     };
//   }
// }
