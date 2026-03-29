import { ConfigService } from '@nestjs/config';
import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument, Types } from 'mongoose';
import { UserModelName } from './user.model';
import { JwtService } from '@nestjs/jwt';

//Schema class
@Schema({ timestamps: true })
export class Token {
  @Prop({ type: String, required: true })
  token: string;

  @Prop({ type: Types.ObjectId, ref: UserModelName, required: true })
  user: Types.ObjectId;

  @Prop({ type: Date })
  expiredAt: Date;

  @Prop({ type: Boolean, default: true })
  isValid: Boolean;
}
//Schema

export const TokenSchema = SchemaFactory.createForClass(Token);

TokenSchema.index({ expiredAt: 1 }, { expireAfterSeconds: 0 });

// hooks

TokenSchema.pre('save', async function () {
  if (this.isNew) {
    const jwtService = new JwtService();
    const configService = new ConfigService();
    try {
      const payload = jwtService.verify(this.token, {
        secret: configService.get('JWT_SECRET'),
      });
      this.expiredAt = new Date(payload.exp * 1000);
    } catch (error) {
      throw error;
    }
  }
});

//model name
export const TokenModelName = Token.name;

//model

export const TokenModel = MongooseModule.forFeature([
  { name: TokenModelName, schema: TokenSchema },
]);

// Token document

export type TokenDocument = HydratedDocument<Token>;
