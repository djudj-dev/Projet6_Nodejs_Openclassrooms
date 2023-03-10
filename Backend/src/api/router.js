import { Router } from 'express';
import { authRouter, multerPostRouter, multerPutRouter } from './middleware/route.js';
import { signupRouter } from './signup/route.js';
import { loginRouter } from './login/route.js';
import { getSauceRouter, deleteSauceRouter, putSauceRouter } from './sauce/route.js';
import { getSaucesRouter, postSaucesRouter } from './sauces/route.js';
import { likeSauceRouter } from './like/route.js';

/**
 * @file Manage the router creation with all the routes object
 * @routerImplement use all the middleware & endPoints for 
 * implement the API router
 * @param { router }; Need to be an Express Router
 * @param { middlewares, endPoints }; 
 * needs to be two arrays of objects with :
 * - type
 * - route
 * - controller  
**/

const router = Router();
const routerAPIObj = {
  middlewares: [
    authRouter,
    multerPostRouter,
    multerPutRouter
  ],
  endPoints: [
    signupRouter,
    loginRouter,
    getSauceRouter,
    deleteSauceRouter,
    putSauceRouter,
    getSaucesRouter,
    likeSauceRouter,
    postSaucesRouter
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
};

export const apiRouter = routerImplement(router, routerAPIObj);