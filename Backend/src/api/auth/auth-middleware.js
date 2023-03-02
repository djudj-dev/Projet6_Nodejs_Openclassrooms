import { mongoModels } from "../../../mongoDB/models.js";
import { tokenManager } from "../../utils/jwt.js";

const { User: { model }} = mongoModels;

export const authVerifier = async (req, res) => {
  const { headers: {authorization}} = req;
  const tokenToVerify = authorization.split(' ')[1];
  const isVerifed = tokenManager.verify(tokenToVerify);
  
  if (isVerifed) {
    const request = await model.findOne({_id : isVerifed.id});

    return res.send((request ? true : false));
  }

  return res.status(403).send('non authorized request');
}