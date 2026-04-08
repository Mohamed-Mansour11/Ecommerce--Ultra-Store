import { Injectable, Inject } from '@nestjs/common';
import Stripe from 'stripe';

import { STRIPE_CLIENT } from 'src/common/constants';

@Injectable()
export class PaymentService {
  constructor(@Inject(STRIPE_CLIENT) private readonly stripe: Stripe) {}

  // checkoutsession
  async createCheckoutSession({
    line_items,
    metadata,
    discounts,
    customer_email,
  }: Stripe.Checkout.SessionCreateParams) {
    const session = await this.stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment', // once
      line_items, // array of products
      customer_email,
      discounts,
      success_url: 'http://localhost:5000/success',
      cancel_url: 'http://localhost:5000/cancel',
      metadata,
    });

    return session; // url
  }
  // create coupon
  async createCoupon({ currency, percent_off }: Stripe.CouponCreateParams) {
    return this.stripe.coupons.create({ currency, percent_off });
  }

  // refund
  async refund(payment_intent: string) {
    return this.stripe.refunds.create({ payment_intent });
  }
}
