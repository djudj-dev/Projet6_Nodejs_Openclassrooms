import { mongoModels } from './../../mongoDB/models.js';
import { hashManager } from './../../utils/security/index.js'
import { typeVerificator, regexVerificator } from './../../utils/object-tools/index.js';
import { userTypeSchema } from './../../utils/object-tools/index.js';
import { logString } from './../../utils/string.js';

/**
 * @file Manage the API signup end-point
 * @signupController is the only function 
 * it work with User models and hashManager
 * is verify data, hash the password and create in DB if all is good
**/

const {
  api_bad_request,
  auth_invalid_credential,
  signup_valid,
  signup_allready_exist
} = logString;
const { User:{ create, findOne} } = mongoModels;

export const signupController = async (req, res) => {
  const isDataGood = typeVerificator(userTypeSchema, req.body);
  const isFormatDataGood = regexVerificator(userTypeSchema, req.body);
  const { email, password } =  req.body;
  const createUserData = {email: email, password: await hashManager.hash(password)};
 
  if (isDataGood && isFormatDataGood) {
    const {status, data} = await findOne({ email: email });
    
    if (status && !data){
      const createUser = await create(createUserData);

      if (createUser.status) {

        return res.send(signup_valid + email);
      }
    }
    return res.status(409).send(signup_allready_exist);
  }
  const errorMessage = (isDataGood && !isFormatDataGood) ? auth_invalid_credential : api_bad_request;

  return res.status(400).send(errorMessage);
}