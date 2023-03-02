import { Router } from 'express'
import { signupRooter } from './auth/signup/signup.js'
import { loginRooter } from './auth/login/login.js';

const rooter = Router();

rooter[signupRooter.type](signupRooter.route, signupRooter.callback);
rooter[loginRooter.type](loginRooter.route, loginRooter.callback);
export { rooter };