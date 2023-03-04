import { mongoModels } from './../../mongoDB/models.js';
import { hashManager } from './../../utils/pwd-hash.js'
import { typeVerificator, regexVerificator } from '../../utils/object-tools/object-verifier.js';
import { userTypeSchema } from '../../utils/object-tools/type-checker/index.js';

const { User } = mongoModels;

export const signupController = async (req, res) => {
  const { email, password } =  req.body;
  const createUserData = {email: email, password: await hashManager.hash(password)};
  const isDataGood = typeVerificator(userTypeSchema, createUserData);
  const isFormatDataGood = regexVerificator(userTypeSchema, createUserData)
 
  if (isDataGood && isFormatDataGood) {
    
    const createUser = await User.create(createUserData);
    if (createUser.status) {

      return res.send('utilisateur créer');
    }
  }
  const errorMessage = (isDataGood && !isFormatDataGood) ? 'invalid password or email format' : 'Bad Request';

  return res.status(400).send(errorMessage);
}