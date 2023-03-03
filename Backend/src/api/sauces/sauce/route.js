import { getSauceController, deleteSauceController } from "./controller.js"

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