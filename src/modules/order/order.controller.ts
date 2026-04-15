import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Headers, // إضافة Headers
  Req, // إضافة Req
  // إضافة RawBodyRequest
} from '@nestjs/common';
import type { RawBodyRequest } from '@nestjs/common'; // تأكد من استيراد RawBodyRequest
import { Request } from 'express'; // تأكد من استيراد Request من مكتبة express
import { OrderService } from './order.service';
import { CreateOrderDto } from './dto/create-order.dto';
import { UpdateOrderDto } from './dto/update-order.dto';
import { User } from 'src/common/decorarors/user.decorator';
import type { UserDocument } from 'src/DB/models/user.model';
import { Public } from 'src/common/decorarors/public.decorator';
import { Role } from 'src/DB/enums/user.enum';
import { Roles } from 'src/common/decorarors/roles.decorator';
import { Types } from 'mongoose';
import { ParseObjectIdPipe } from '@nestjs/mongoose/dist/pipes/parse-object-id.pipe';

@Controller('order')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  @Roles(Role.user)
  @Post()
  async create(@Body() data: CreateOrderDto, @User() user: UserDocument) {
    return this.orderService.create(data, user);
  }

  // التعديل هنا: استقبال الـ Raw Body والتوقيع
  @Post('/webhook')
  @Public()
  async stripeWebhook(
    @Headers('stripe-signature') signature: string,
    @Req() req: RawBodyRequest<Request>,
  ) {
    // نمرر التوقيع والـ Buffer الخام إلى الـ Service للتحقق
    return this.orderService.stripeWebhook(signature, req.rawBody);
  }

  @Roles(Role.user)
  @Post('/cancel/:id')
  async cancelOrder(
    @Param('id', ParseObjectIdPipe) orderId: Types.ObjectId,
    @User('_id') userId: Types.ObjectId,
  ) {
    return this.orderService.cancelOrder(orderId, userId);
  }
}
