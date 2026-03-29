import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { hash } from 'src/common/security/hash.util';

//Schema class
@Schema({ timestamps: true })
export class OTP {
  @Prop({ type: String, required: true, unique: true, lowercase: true })
  email: string;

  @Prop({ type: String, required: true })
  otp: string;
}
//Schema

export const OTPSchema = SchemaFactory.createForClass(OTP);

OTPSchema.index({ createdAt: 1 }, { expireAfterSeconds: 120 });

// hooks

OTPSchema.pre('save', async function () {
  if (this.isModified('otp')) {
    this.otp = hash(this.otp);
  }
});

//model name
export const OTPModelName = OTP.name;

//model

export const OTPModel = MongooseModule.forFeature([
  { name: OTPModelName, schema: OTPSchema },
]);

// OTP document

export type OTPDocument = HydratedDocument<OTP>;
