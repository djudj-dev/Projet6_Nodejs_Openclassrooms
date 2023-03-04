import { signupController } from './controller.js'

export const signupRooter = {
  type: 'post',
  route: '/api/auth/signup', 
  controller : signupController
}