import { Schema } from 'mongoose';

const UserSchema = new Schema ({
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
});

export const UserModelObject = {
  name: 'User',
  schema: UserSchema
}