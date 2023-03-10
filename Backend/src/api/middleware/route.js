import { authMiddleware } from './auth-middleware.js';
import { uploadImg } from './multer.js';

/**
 * @file Manage the API middleware 
 * @authRouter for authentication,
 * @multerPostRouter for post sauces with images
 * @multerPutRouter for put sauce with images
 * it need the type, route & controller for 
 * be used by the @routerImplement fonction later
**/

export const authRouter = { 
  type: 'all',
  route: '/api/sauces*', 
  controller : authMiddleware
}

export const multerPostRouter = {
  type: 'post', 
  route: '/api/sauces',
  controller: uploadImg.single('image')
}

export const multerPutRouter = {
  type: 'put', 
  route: '/api/sauces/:id',
  controller: uploadImg.single('image')
}