import { authMiddleware } from './auth-middleware.js';
import { uploadImg } from './multer.js';

export const authRooter = { 
  type: 'all',
  route: '/api/sauces*', 
  controller : authMiddleware
}

export const multerPostRooter = {
  type: 'post', 
  route: '/api/sauces',
  controller: uploadImg.single('image')
}

export const multerPutRooter = {
  type: 'put', 
  route: '/api/sauces/:id',
  controller: uploadImg.single('image')
}