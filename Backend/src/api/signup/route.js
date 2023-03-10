import { signupController } from './controller.js';

/**
 * @file Manage the API sauces end-point 
 * @signupRouter is the only route object
 * it need the type, route & controller for 
 * be used by the @routerImplement fonction later
**/

export const signupRouter = {
  type: 'post',
  route: '/api/auth/signup', 
  controller : signupController
}