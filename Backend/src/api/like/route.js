import { likeSauceController } from './controller.js';

/**
 * @file Manage the API like end-point route 
 * @likeSauceRouter is the only route object
 * it need the type, route & controller for 
 * be used by the @routerImplement fonction later
**/

export const likeSauceRouter = {
  type: 'post',
  route: '/api/sauces/:id/like', 
  controller : likeSauceController
}