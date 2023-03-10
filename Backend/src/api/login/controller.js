import { mongoModels } from './../../mongoDB/models.js';
import { tokenManager } from './../../utils/security/index.js';
import { hashManager } from './../../utils/security/index.js';
import { typeVerificator, regexVerificator } from './../../utils/object-tools/index.js';
import { userTypeSchema } from './../../utils/object-tools/index.js';
import { logString } from './../../utils/string.js';

/**
 * @file Manage the API login end-point controller 
 * @loginController is the only function
 * it work with User models, hashManager and tokenManager
 * for verify user exist, his password and send a token if all is good
**/

const { 
  api_bad_request,
  login_success,
  login_failed,
  auth_invalid_credential
} = logString;
const { User } = mongoModels;

export const loginController = async (req, res) => {
  const isDataGood = typeVerificator(userTypeSchema, req.body);
  const isFormatDataGood = regexVerificator(userTypeSchema, req.body);
  const { email, password } = req.body;

  if (isDataGood && isFormatDataGood) {
    const getUser = await User.model.findOne({email: email});
    const isPasswordValid = (getUser.password && await hashManager.verify(password, getUser.password));

    if (isPasswordValid) {
      const token = tokenManager.create({id: getUser.id});
      console.log(login_success, email);

      return res.send({userId: getUser.id,token: token});
    }
  }
  console.log(login_failed, email);
  const errorMessage = (isDataGood && !isFormatDataGood) ? auth_invalid_credential : api_bad_request;
  
  return res.status(400).send(errorMessage);
}