import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { CartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';
import { Types } from 'mongoose';
import { CartRepository } from 'src/DB/repositories/cart.repository';
import { ProductRepository } from 'src/DB/repositories/product.repository';
import { ProductService } from '../product/product.service';

@Injectable()
export class CartService {
  constructor(
    private readonly _CartRepository: CartRepository,
    private readonly _ProductRepository: ProductRepository,
    private readonly _ProductService: ProductService,
  ) {}

  // async addToCart(data: CartDto, userId: Types.ObjectId) {
  //   const { productId, quantity } = data;

  //   // check product
  //   const product = await this._ProductRepository.findOne({
  //     filter: { _id: productId },
  //   });

  //   if (!product) throw new NotFoundException('Product not found!');

  //   if (!this._ProductService.inStock(product, quantity))
  //     throw new BadRequestException(
  //       `Sorry only ${product.stock} items are available !`,
  //     );

  //   const isProductInCart = await this._CartRepository.findOne({
  //     filter: { user: userId, 'products.productId': productId },
  //   });

  //   if (isProductInCart) {
  //     const theProduct = isProductInCart.products.find(
  //       (prd) => prd.productId.toString() == productId.toString(),
  //     );

  //     // check stock
  //     if (
  //       this._ProductService.inStock(product, theProduct!.quantity + quantity)
  //     ) {
  //       theProduct!.quantity = theProduct!.quantity + quantity;
  //       await isProductInCart.save();
  //       return { data: isProductInCart };
  //     } else {
  //       throw new BadRequestException(
  //         `Sorry only ${product.stock} items are available !`,
  //       );
  //     }
  //   }

  //   // إذا لم يكن المنتج موجوداً مسبقاً في العربة، قم بإضافته
  //   const cart = await this._CartRepository.update({
  //     filter: { user: userId },
  //     update: {
  //       $push: { products: { productId, quantity, price: product.finalPrice } },
  //     },
  //   });

  //   return { data: cart };
  // }

  async addToCart(data: CartDto, userId: Types.ObjectId) {
    const { productId, quantity } = data;

    // 1. التأكد من وجود المنتج وصلاحية المخزون
    const product = await this._ProductRepository.findOne({
      filter: { _id: productId },
    });

    if (!product) throw new NotFoundException('Product not found!');

    if (!this._ProductService.inStock(product, quantity))
      throw new BadRequestException(
        `Sorry only ${product.stock} items are available!`,
      );

    // 2. البحث عن عربة المستخدم (جلب الوثيقة بالكامل لاستخدام .save لاحقاً)
    let cart = await this._CartRepository.findOne({ filter: { user: userId } });

    // 3. إذا لم تكن هناك عربة، نقوم بإنشائها
    if (!cart) {
      cart = await this._CartRepository.create({
        user: userId,
        products: [{ productId, quantity, price: product.finalPrice }],
      });
      return { data: cart };
    }

    // 4. إذا كانت العربة موجودة، نتحقق هل المنتج موجود بداخلها أم لا
    const existingProduct = cart.products.find(
      (p) => p.productId.toString() === productId.toString(),
    );

    if (existingProduct) {
      // تحديث الكمية والسعر الحالي (في حال تغير السعر في المتجر)
      const newQuantity = existingProduct.quantity + quantity;

      if (!this._ProductService.inStock(product, newQuantity))
        throw new BadRequestException(
          `Sorry only ${product.stock} items are available!`,
        );

      existingProduct.quantity = newQuantity;
      existingProduct.price = product.finalPrice;
    } else {
      // إضافة منتج جديد للمصفوفة
      cart.products.push({
        productId: new Types.ObjectId(productId),
        quantity,
        price: product.finalPrice,
      });
    }

    // 5. حفظ العربة (سيقوم الـ pre-save hook بحساب totalPrice تلقائياً)
    await cart.save();

    return { data: cart };
  }

  // async updateCart(data: CartDto, userId: Types.ObjectId) {
  //   const { productId, quantity } = data;

  //   // check product
  //   const product = await this._ProductRepository.findOne({
  //     filter: { _id: productId },
  //   });

  //   if (!product) throw new NotFoundException('Product not found!');

  //   if (!this._ProductService.inStock(product, quantity))
  //     throw new BadRequestException(
  //       `Sorry only ${product.stock} items are available !`,
  //     );

  //   const cart = await this._CartRepository.update({
  //     filter: { user: userId, 'products.productId': productId },
  //     update: {
  //       'products.$.quantity': quantity,
  //       'products.$.price': product.finalPrice,
  //     },
  //   });

  //   return { data: cart };
  // }

  async updateCart(data: CartDto, userId: Types.ObjectId) {
    const { productId, quantity } = data;

    // 1. التأكد من وجود المنتج والمخزون
    const product = await this._ProductRepository.findOne({
      filter: { _id: productId },
    });
    if (!product) throw new NotFoundException('Product not found!');

    if (!this._ProductService.inStock(product, quantity))
      throw new BadRequestException(
        `Sorry only ${product.stock} items are available!`,
      );

    // 2. جلب العربة بالكامل (Document) لكي نتمكن من استخدام .save()
    const cart = await this._CartRepository.findOne({
      filter: { user: userId, 'products.productId': productId },
    });

    if (!cart) throw new NotFoundException('Cart or Product not found!');

    // 3. تحديث العنصر المطلوب داخل المصفوفة برمجياً (JavaScript)
    // هذا يضمن أننا نحدث العنصر الصحيح ونحذف أي تكرارات يدوياً إذا وجدت
    const productInCart = cart.products.find(
      (p) => p.productId.toString() === productId.toString(),
    );

    if (productInCart) {
      productInCart.quantity = quantity;
      productInCart.price = product.finalPrice;
    }

    // 4. الحفظ (هنا يتم استدعاء الـ Hook وحساب الـ totalPrice تلقائياً)
    await cart.save();

    return { data: cart };
  }

  async clearCart(userId: Types.ObjectId) {
    const cart = await this._CartRepository.update({
      filter: { user: userId },
      update: { products: [] },
    });

    return { data: cart };
  }

  async getCart(userId: Types.ObjectId) {
    return this._CartRepository.findOne({ filter: { user: userId } });
  }

  // async removeFromCart(productId: Types.ObjectId, userId: Types.ObjectId) {
  //     const cart = await this._CartRepository.update({
  //       filter: { user: userId },
  //       update: {
  //         $pull: { products: { productId: productId } },
  //       },
  //     });

  //     if (!cart) throw new NotFoundException('Cart not found!');

  //     return { data: cart };
  //   }

  findAll() {
    return `This action returns all cart`;
  }
}
