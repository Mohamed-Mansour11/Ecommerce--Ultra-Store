import { Module } from '@nestjs/common';
import { StripeProvider } from './payment.provider';
import { PaymentService } from './payment.service';

@Module({
  providers: [PaymentService, StripeProvider],
  exports: [PaymentService],
})
export class PaymentModule {}
