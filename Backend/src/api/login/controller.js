import { mongoModels } from './../../mongoDB/models.js';
import { tokenManager } from './../../utils/jwt.js';
import { hashManager } from './../../utils/pwd-hash.js';
import { typeVerificator, regexVerificator } from '../../utils/object-tools/object-verifier.js';
import { userTypeSchema } from '../../utils/object-tools/type-checker/index.js';
import { logString } from '../../utils/string.js';

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