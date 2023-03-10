import { mongoModels } from './../../mongoDB/models.js';
import { tokenManager } from './../../utils/security/index.js';
import { logString } from './../../utils/string.js';

/**
 * @file Manage the API auth middleware controller 
 * @authMiddleware is the only function
 * it work with User models,and tokenManager
 * for verify token integrity and user exist on DB
 * for all protected routes
**/

const { api_unauthorized, auth_request } = logString;
const { User: { model }} = mongoModels;

export const authMiddleware = async (req, res, next) => {
  const { headers: { authorization }} = req;

  if (typeof(authorization) === 'string') {
    const tokenToVerify = authorization.split(' ')[1];
    const isVerifed = tokenManager.verify(tokenToVerify);

    if (isVerifed && isVerifed?.id) {
      const request = await model.findOne({_id : isVerifed.id});

      if (request?.id === isVerifed.id) {
        console.log(auth_request, request.email);

        return next();
      }
    }
  }

  return res.status(403).send(api_unauthorized);
}