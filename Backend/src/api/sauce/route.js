import { getSauceController, deleteSauceController, putSauceController } from './controller.js'

/**
 * @file Manage the API sauce end-point 
 * @getSauceRouter for get one sauce,
 * @deleteSauceRouter for delete one sauce,
 * @putSauceRouter for update one sauce
 * it need the type, route & controller for 
 * be used by the @routerImplement fonction later
**/

export const getSauceRouter = { 
  type: 'get',
  route: '/api/sauces/:id', 
  controller : getSauceController
}

export const deleteSauceRouter = {
  type: 'delete',
  route: '/api/sauces/:id', 
  controller : deleteSauceController
}

export const putSauceRouter = {
  type: 'put',
  route: '/api/sauces/:id', 
  controller : putSauceController
}