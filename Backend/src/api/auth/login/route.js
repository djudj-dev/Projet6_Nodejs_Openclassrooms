import { loginController } from './controller.js'

export const loginRooter = {
  type: 'post',
  route: '/api/auth/login', 
  controller : loginController
}