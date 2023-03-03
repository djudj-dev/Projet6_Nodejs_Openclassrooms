import { Router } from 'express'
import * as RoutersObj from './api/auth/index.js'
import { authRooter } from './api/middleware/route.js';
import { getSaucesRooter, postSaucesRooter } from './api/sauces/sauces/route.js';
import { getSauceRooter, deleteSauceRooter} from './api/sauces/sauce/route.js';
import { uploadFile } from './utils/multer.js';
import { likeSauceRooter } from './api/sauces/like/route.js';

const rooter = Router();

rooter[authRooter.type](authRooter.route, authRooter.controller);

rooter[likeSauceRooter.type](likeSauceRooter.route, likeSauceRooter.controller);
rooter[postSaucesRooter.type](postSaucesRooter.route, uploadFile.single('image'), postSaucesRooter.controller);
rooter[deleteSauceRooter.type](deleteSauceRooter.route, deleteSauceRooter.controller);
rooter[getSauceRooter.type](getSauceRooter.route, getSauceRooter.controller);
rooter[getSaucesRooter.type](getSaucesRooter.route, getSaucesRooter.controller);
Object.values(RoutersObj).forEach(({type, route, controller}) => rooter[type](route, controller));

export { rooter };