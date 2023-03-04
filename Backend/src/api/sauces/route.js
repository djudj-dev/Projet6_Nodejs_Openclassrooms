import { getSaucesController, postSauceController } from "./controller.js"

export const getSaucesRooter = { 
  type: 'get',
  route: '/api/sauces', 
  controller : getSaucesController
}

export const postSaucesRooter = { 
  type: 'post',
  route: '/api/sauces', 
  controller : postSauceController
}