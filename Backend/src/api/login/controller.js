import { mongoModels } from './../../mongoDB/models.js';
import { tokenManager } from './../../utils/jwt.js';
import { hashManager } from './../../utils/pwd-hash.js';
import { typeVerificator, regexVerificator } from '../../utils/object-tools/object-verifier.js';
import { userTypeSchema } from '../../utils/object-tools/type-checker/index.js';

const { User } = mongoModels;

export const loginController = async (req, res) => {
  const { email, password } =  req.body;
  const isDataGood = typeVerificator(userTypeSchema, {email: email, password: password});
  const isFormatDataGood = regexVerificator(userTypeSchema, {email: email, password: password})

  if (isDataGood && isFormatDataGood) {
    const getUser = await User.model.findOne({email: email});
    const isPasswordValid = (getUser.password && await hashManager.verify(password, getUser.password));

    if (isPasswordValid) {
      const token = tokenManager.create({id: getUser.id});
      console.log('login de :', email);
      return res.send({userId: getUser.id,token: token});
    }
  }
  console.log('echec de login de :', email);
  const errorMessage = (isDataGood && !isFormatDataGood) ? 'invalid password or email format' : 'Bad Request';
  
  return res.status(400).send(errorMessage);
}