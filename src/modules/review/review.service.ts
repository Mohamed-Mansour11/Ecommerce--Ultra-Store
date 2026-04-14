import { BadRequestException, Injectable } from '@nestjs/common';
import { CreateReviewDto } from './dto/create-review.dto';
import { Types } from 'mongoose';
import { ReviewRepository } from 'src/DB/repositories/review.repository';
import { OrderRepository } from 'src/DB/repositories/order.repository';
import { ProductService } from '../product/product.service';
import { OrderStatus } from 'src/DB/models/order.model';

@Injectable()
export class ReviewService {
  constructor(
    private readonly _ReviewRepository: ReviewRepository,
    private readonly _OrderRepository: OrderRepository,
    private readonly _ProductService: ProductService,
  ) {}

  async addReview(data: CreateReviewDto, userId: Types.ObjectId) {
    // 1. التأكد أن المنتج موجود
    const product = await this._ProductService.checkProductExistence(
      data.productId as any,
    );

    // 2. فحص هل قام العميل بشراء هذا المنتج وهل استلمه؟
    // تأكد أن OrderRepository يستخدم نفس الـ Abstract Repository ليقبل الـ filter
    const hasBoughtAndReceived = await this._OrderRepository.findOne({
      filter: {
        user: userId,
        orderStatus: OrderStatus.delivered,
        'products.productId': new Types.ObjectId(data.productId as string),
      },
    });

    if (!hasBoughtAndReceived) {
      throw new BadRequestException(
        'لا يمكنك تقييم هذا المنتج. يجب أن تكون قد اشتريته واستلمته أولاً.',
      );
    }

    // 3. فحص هل قام بتقييمه من قبل؟
    //  لاحظ هنا: استخدمنا { filter: { ... } } بناءً على AbstractRepository
    const existingReview = await this._ReviewRepository.findOne({
      filter: {
        user: userId,
        product: data.productId,
      },
    });

    if (existingReview) {
      throw new BadRequestException('لقد قمت بتقييم هذا المنتج مسبقاً.');
    }

    // 4. إنشاء التقييم وحفظه
    const review = await this._ReviewRepository.create({
      user: userId,
      product: new Types.ObjectId(data.productId as string) as any,
      rating: data.rating,
      comment: data.comment,
    });

    // تحديث (Average Rating) في جدول المنتجات
    await this.updateProductAverageRating(data.productId);

    return { message: 'تم إضافة التقييم بنجاح', review };
  }

  // جلب تقييمات منتج معين مع دعم الـ Populate لمعرفة اسم صاحب التقييم
  async getProductReviews(productId: string) {
    // 💡 لاحظ هنا: استخدمنا findAll ومررنا filter و populate
    const result = await this._ReviewRepository.findAll({
      filter: { product: productId },
      populate: { path: 'user', select: 'name image' }, // لجلب صورة واسم العميل
    });

    // الدالة findAll لديك ترجع كائن يحتوي على (totalSize, data, الخ..)
    return {
      count: result.totalSize,
      reviews: result.data,
    };
  }

  // ==========================================
  // دالة مساعدة لتحديث متوسط التقييمات في المنتج
  // ==========================================
  private async updateProductAverageRating(productId: string) {
    const result = await this._ReviewRepository.findAll({
      filter: { product: productId },
      // لن نحتاج لـ Pagination هنا لأننا نريد حساب كل التقييمات
      // يمكنك تمرير limit كبير أو تعديل findAll لتتجاهل الـ limit لو لم يُمرر paginate
    });

    const reviews = result.data || [];

    if (reviews.length > 0) {
      const sum = reviews.reduce((acc, item) => acc + item.rating, 0);
      const avgRating = sum / reviews.length;

      // الدالة دي المفروض تكون موجودة في الـ ProductService
      await this._ProductService.updateProductRating(
        productId,
        avgRating,
        reviews.length,
      );
    }
  }
}
