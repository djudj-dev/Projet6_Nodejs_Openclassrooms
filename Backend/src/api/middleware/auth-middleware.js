import { mongoModels } from './../../mongoDB/models.js';
import { tokenManager } from './../../utils/jwt.js';
import { logString } from '../../utils/string.js';

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