import  argon2 from 'argon2';
import { logString } from './string.js';

const { pwd_hash_error, pwd_verify_error } = logString;

export const hashManager = {
  hash: async (password) => {
    let hashedPassword;

    try {
      hashedPassword = await argon2.hash(password+process.env.PASSWORD_INCREASE);
    } catch (error) {
      console.error(pwd_hash_error, error)
      hashedPassword = false;
    }

    return hashedPassword;
  },
  verify: async (clearPassword ,hashedPassword) => {
    let isVerified; 

    try {
      isVerified = await argon2.verify(hashedPassword, (clearPassword+process.env.PASSWORD_INCREASE)) 
    } catch (error) {
      console.error(pwd_verify_error, error);
      isVerified = false;
    }

    return isVerified;
  }
}