import { Schema } from 'mongoose';

/**
 * @file manage the User DB schema 
 * @UserSchema will be used later by the @createModels function 
**/

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