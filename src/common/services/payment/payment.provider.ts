import { ConfigService } from '@nestjs/config';
import { STRIPE_CLIENT } from 'src/common/constants';
import Stripe from 'stripe';

export const StripeProvider = {
  provide: STRIPE_CLIENT,
  inject: [ConfigService],
  useFactory: (configService: ConfigService) => {
    return new Stripe(configService.get<string>('STRIPE_SECRET_KEY')!, {});
  },
};
