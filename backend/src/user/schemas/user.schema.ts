import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type UserDocument = User & Document;

@Schema()
export class User {
  @Prop({ unique: true })
  id: string;

  @Prop({ unique: true, index: true, required: true })
  email: string;

  @Prop()
  password: string;

  @Prop()
  name: string;
  @Prop()
  surname: string;

  @Prop()
  avatar: string;
  @Prop()
  age: number;
  @Prop()
  role: 'admin' | 'user';
}

export const UserSchema = SchemaFactory.createForClass(User);
