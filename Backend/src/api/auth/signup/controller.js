import { mongoModels } from "../../../mongoDB/models.js";
import { hashManager } from "../../../utils/hash-argon2.js";
import { typeVerificator, regexVerificator } from "../../../utils/object-verifier.js";
import { userType } from "../../../utils/object-typeChecker/user-type-checker-obj.js";

const { User } = mongoModels;

export const signupController = async (req, res) => {
  const { email, password } =  req.body;
  const createUserData = {email: email, password: await hashManager.hash(password)};
  const isDataGood = typeVerificator(userType, createUserData);
  const isFormatDataGood = regexVerificator(userType, createUserData)
 
  if (isDataGood && isFormatDataGood) {
    
    const createUser = await User.create(createUserData);
    if (createUser.status) {

      return res.send('utilisateur créer');
    }
  }
  const errorMessage = (isDataGood && !isFormatDataGood) ? 'invalid password or email format' : 'Bad Request';

  return res.status(400).send(errorMessage);
}