import jwt from 'jsonwebtoken';
import { logString } from './../string.js';

const { jwt_sign_error, jwt_verify_error } = logString;
const { JWT_SECRET_KEY , JWT_EXPIRE_TIME } = process.env;

export const tokenManager = {
  create: (payload) => {
    let tokenSign;

    try {
      tokenSign = jwt.sign(payload, JWT_SECRET_KEY, {expiresIn: JWT_EXPIRE_TIME});
    } catch (error) {
      console.error(jwt_sign_error, error);
      tokenSign = false;
    }

    return tokenSign;
  },
  verify: (token) => {
    let tokenVerify;

    try {
      tokenVerify = jwt.verify(token, JWT_SECRET_KEY);
    } catch (error) {
      console.error(jwt_verify_error, error);
      tokenVerify = false;
    }

    return tokenVerify;
  }
}