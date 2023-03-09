import { Router } from 'express';
import { authRooter, multerPostRooter, multerPutRooter  } from './middleware/route.js';
import { signupRooter } from './signup/route.js';
import { loginRooter } from './login/route.js';
import { getSauceRooter, deleteSauceRooter, putSauceRooter } from './sauce/route.js';
import { getSaucesRooter, postSaucesRooter } from './sauces/route.js';
import { likeSauceRooter } from './like/route.js';

const router = Router();
const routerAPIObj = {
  middlewares: [
    authRooter,
    multerPostRooter,
    multerPutRooter
  ],
  endPoints: [
    signupRooter,
    loginRooter,
    getSauceRooter,
    deleteSauceRooter,
    putSauceRooter,
    getSaucesRooter,
    likeSauceRooter,
    postSaucesRooter
  ]
};

const routerImplement = (router, { middlewares, endPoints }) => {
  middlewares.forEach(({type, route, controller}) => (
    router[type](route, controller)
  ));

  endPoints.forEach(({type, route, controller}) => (
    router[type](route, controller)
  ));

  return router;
}

export const apiRouter = routerImplement(router, routerAPIObj);