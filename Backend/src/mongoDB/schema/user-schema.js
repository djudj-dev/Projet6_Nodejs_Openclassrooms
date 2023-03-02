import { Schema } from "mongoose";

const UserSchema = new Schema ({
  email: {
    type: String,
    require: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  }
});

export const UserModelObject = {
  name: 'User',
  schema: UserSchema
}