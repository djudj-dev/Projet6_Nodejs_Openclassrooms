import { likeSauceController } from "./controller.js"

export const likeSauceRooter = {
  type: 'post',
  route: '/api/sauces/:id/like', 
  controller : likeSauceController
}