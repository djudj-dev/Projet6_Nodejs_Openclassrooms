import { getSaucesController, postSauceController } from './controller.js';

/**
 * @file Manage the API sauces end-point 
 * @getSaucesRouter for get all sauces,
 * @postSauceRouter for create one sauce
 * it need the type, route & controller for 
 * be used by the @routerImplement fonction later
**/

export const getSaucesRouter = { 
  type: 'get',
  route: '/api/sauces', 
  controller : getSaucesController
}

export const postSaucesRouter = { 
  type: 'post',
  route: '/api/sauces', 
  controller : postSauceController
}