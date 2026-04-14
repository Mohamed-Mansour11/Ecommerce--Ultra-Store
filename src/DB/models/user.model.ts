import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Role } from '../enums/user.enum';
import { HydratedDocument, Types } from 'mongoose';
import { hash } from 'src/common/security/hash.util';

//Schema class
@Schema({ timestamps: true })
export class User {
  @Prop({ type: String, required: true })
  firstName!: string;

  @Prop({ type: String, required: true })
  lastName!: string;

  @Prop({ type: String, required: true, unique: true, lowercase: true })
  email!: string;

  @Prop({ type: String, required: true })
  password!: string;

  @Prop({ type: Boolean, default: false })
  accountAcctivated!: boolean;

  @Prop({ type: String, default: Role.user })
  role!: Role;

  @Prop({
    type: [
      {
        city: { type: String, required: true },
        street: { type: String, required: true },
        phone: { type: String, required: true },
        postalCode: { type: String },
        isDefault: { type: Boolean, default: false },
      },
    ],
  })
  addresses!: {
    _id?: Types.ObjectId;
    city: string;
    street: string;
    phone: string;
    postalCode?: string;
    isDefault: boolean;
  }[];
}
//Schema

export const UserSchema = SchemaFactory.createForClass(User);

// hooks

UserSchema.pre('save', async function () {
  if (this.isModified('password')) {
    this.password = hash(this.password);
  }
});

//model name
export const UserModelName = User.name;

//model

export const UserModel = MongooseModule.forFeature([
  { name: UserModelName, schema: UserSchema },
]);

// user document

export type UserDocument = HydratedDocument<User>;

// import { MongooseModule, Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
// import { Role } from '../enums/user.enum';
// import { HydratedDocument } from 'mongoose';
// import { hash } from 'src/common/security/hash.util';

// //Schema class
// @Schema({ timestamps: true })
// export class User {
//   @Prop({ type: String, required: true })
//   firstName!: string;

//   @Prop({ type: String, required: true })
//   lastName!: string;

//   @Prop({ type: String, required: true, unique: true, lowercase: true })
//   email!: string;

//   @Prop({ type: String, required: true })
//   password!: string;

//   @Prop({ type: Boolean, default: false })
//   accountAcctivated!: boolean;

//   @Prop({ type: String, default: Role.user })
//   role!: Role;
// }
// //Schema

// export const UserSchema = SchemaFactory.createForClass(User);

// // hooks

// UserSchema.pre('save', async function () {
//   if (this.isModified('password')) {
//     this.password = hash(this.password);
//   }
// });

// //model name
// export const UserModelName = User.name;

// //model

// export const UserModel = MongooseModule.forFeature([
//   { name: UserModelName, schema: UserSchema },
// ]);

// // user document

// export type UserDocument = HydratedDocument<User>;
