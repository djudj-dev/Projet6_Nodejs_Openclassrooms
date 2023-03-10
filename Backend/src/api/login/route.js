import { loginController } from './controller.js';

/**
 * @file Manage the API login end-point route 
 * @loginRouter is the only route object
 * it need the type, route & controller for 
 * be used by the @routerImplement fonction later
**/

export const loginRouter = {
  type: 'post',
  route: '/api/auth/login', 
  controller : loginController
}