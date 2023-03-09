import { mongoModels } from './../../mongoDB/models.js';
import { hashManager } from './../../utils/pwd-hash.js'
import { typeVerificator, regexVerificator } from '../../utils/object-tools/object-verifier.js';
import { userTypeSchema } from '../../utils/object-tools/type-checker/index.js';
import { logString } from '../../utils/string.js';

const {
  api_bad_request,
  auth_invalid_credential,
  signup_valid
} = logString;
const { User } = mongoModels;

export const signupController = async (req, res) => {
  const isDataGood = typeVerificator(userTypeSchema, req.body);
  const isFormatDataGood = regexVerificator(userTypeSchema, req.body);
  const { email, password } =  req.body;
  const createUserData = {email: email, password: await hashManager.hash(password)};
 
  if (isDataGood && isFormatDataGood) {
    
    const createUser = await User.create(createUserData);
    
    if (createUser.status) {

      return res.send(signup_valid, email);
    }
  }
  const errorMessage = (isDataGood && !isFormatDataGood) ? auth_invalid_credential : api_bad_request;

  return res.status(400).send(errorMessage);
}