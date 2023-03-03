import { authMiddleware } from './auth-middleware.js'

export const authRooter = { 
  type: 'all',
  route: '/api/sauces*', 
  controller : authMiddleware
}