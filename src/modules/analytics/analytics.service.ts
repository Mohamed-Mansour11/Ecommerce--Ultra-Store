import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order, OrderDocument } from 'src/DB/models/order.model';
import { Coupon, CouponDocument } from 'src/DB/models/coupon.model';
import { User, UserDocument } from 'src/DB/models/user.model';

@Injectable()
export class AnalyticsService {
  constructor(
    @InjectModel(Order.name) private readonly orderModel: Model<OrderDocument>,
    @InjectModel(Coupon.name)
    private readonly couponModel: Model<CouponDocument>,
    @InjectModel(User.name) private readonly userModel: Model<UserDocument>,
  ) {}

  async getAdminDashboardStats() {
    // 1. إحصائيات الأرباح (إجمالي المبيعات للطلبات المدفوعة فقط)
    // ملاحظة: تأكد أن اسم حقل السعر النهائي في الأوردر لديك هو finalPrice أو totalPrice
    const revenueStats = await this.orderModel.aggregate([
      { $match: { paid: true } }, // نجمع أرباح الطلبات الناجحة فقط
      {
        $group: {
          _id: null,
          totalRevenue: { $sum: '$finalPrice' }, // مجموع الأرباح
          totalOrders: { $sum: 1 }, // عدد الطلبات المدفوعة
        },
      },
    ]);

    // 2. الكوبونات الأكثر استخداماً (أفضل 5 كوبونات)
    const topCoupons = await this.couponModel
      .find({ usedBy: { $exists: true, $not: { $size: 0 } } }) // نجلب الكوبونات التي تم استخدامها
      // أو إذا كان لديك حقل جاهز للعداد مثل usageCount استخدمه للترتيب:
      // .sort({ usageCount: -1 })
      .select('name code discount amount usedBy') // نجلب الحقول المهمة فقط
      .limit(5)
      .lean();

    // 3. تحليل حالات الطلبات (كم طلب قيد التنفيذ، كم طلب تم توصيله؟)
    const ordersBreakdown = await this.orderModel.aggregate([
      {
        $group: {
          _id: '$orderStatus', // تجميع بناءً على حالة الطلب
          count: { $sum: 1 },
        },
      },
    ]);

    // 4. إجمالي عدد العملاء المسجلين
    const totalUsers = await this.userModel.countDocuments({ role: 'User' }); // افترض أن الرول اسمها User

    // تجميع البيانات وإرسالها للـ Frontend
    return {
      overview: {
        totalRevenue: revenueStats[0]?.totalRevenue || 0,
        totalPaidOrders: revenueStats[0]?.totalOrders || 0,
        totalUsers,
      },
      ordersBreakdown,
      topCoupons,
    };
  }
}
