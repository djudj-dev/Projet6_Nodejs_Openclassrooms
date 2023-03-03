import { mongoModels } from "../../mongoDB/models.js";
import { tokenManager } from "../../utils/jwt.js";

const { User: { model }} = mongoModels;

export const authMiddleware = async (req, res, next) => {
  const { headers: {authorization}} = req;

  if (typeof(authorization) === 'string'){
    const tokenToVerify = authorization.split(' ')[1];
    const isVerifed = tokenManager.verify(tokenToVerify);

    if (isVerifed?.id) {
      const request = await model.findOne({_id : isVerifed.id});
      if (request?.id === isVerifed.id) {
        console.log(`auth request from: ${request.email}`);
        return next();
      }
    }
  }

  return res.status(403).send('unauthorized request.');
}