import { getSauceController, deleteSauceController, putSauceController } from "./controller.js"

export const getSauceRooter = { 
  type: 'get',
  route: '/api/sauces/:id', 
  controller : getSauceController
}

export const deleteSauceRooter = {
  type: 'delete',
  route: '/api/sauces/:id', 
  controller : deleteSauceController
}

export const putSauceRooter = {
  type: 'put',
  route: '/api/sauces/:id', 
  controller : putSauceController
}