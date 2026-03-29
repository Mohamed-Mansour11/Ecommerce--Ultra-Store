import { Inject, Injectable } from '@nestjs/common';
import { CLOUDINARY } from 'src/common/constants';
import {
  v2 as Cloudinary,
  UploadApiOptions,
  UploadApiResponse,
} from 'cloudinary';
import { Image } from 'src/common/types/image.type';

@Injectable()
export class FileUploadService {
  constructor(@Inject(CLOUDINARY) private cloudinary: typeof Cloudinary) {}

  // دالة لرفع ملف واحد إلى Cloudinary باستخدام الـ Stream
  async uploadCloud(
    buffer: Buffer,
    options: UploadApiOptions,
  ): Promise<UploadApiResponse> {
    return new Promise((resolve, reject) => {
      this.cloudinary.uploader
        .upload_stream(options, (error, result) => {
          if (error) return reject(error);
          return resolve(result!);
        })
        .end(buffer);
    });
  }

  // دالة لمعالجة ورفع مصفوفة من الملفات
  async saveFileToCloud(
    files: Express.Multer.File[],
    options: UploadApiOptions,
  ) {
    let savedFiles: Image[] = [];

    for (const file of files) {
      let buffer = file.buffer;
      const { secure_url, public_id } = await this.uploadCloud(buffer, options);
      savedFiles.push({ secure_url, public_id });
    }

    return savedFiles;
  }

  // حذف مجموعة من الملفات باستخدام publicIds
  async deleteFiles(publicIds: string[]) {
    await this.cloudinary.api.delete_resources(publicIds);
  }

  // حذف مجلد بالكامل (بما يحتويه من ملفات ومجلدات فرعية)
  async deleteFolder(folderPath: string) {
    // 1. حذف جميع الملفات الموجودة داخل المجلد أولاً
    await this.cloudinary.api.delete_resources_by_prefix(folderPath);

    // 2. جلب قائمة بالمجلدات الفرعية (Sub-folders)
    const subFolders = await this.cloudinary.api.sub_folders(folderPath);

    // 3. إذا وجدت مجلدات فرعية، قم بحذفها بشكل تكراري (Recursive)
    if (subFolders.folders.length) {
      for (const subfolder of subFolders.folders) {
        await this.deleteFolder(subfolder.path);
      }
    }

    // 4. بعد التأكد من أن المجلد أصبح فارغاً تماماً، قم بحذفه
    await this.cloudinary.api.delete_folder(folderPath);
  }
}
