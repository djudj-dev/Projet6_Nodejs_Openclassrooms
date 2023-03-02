import { mongoModels } from "../../../mongoDB/models.js";
import { tokenManager } from "../../../utils/jwt.js";
import { hashManager } from "../../../utils/hash-argon2.js";
import { typeVerificator, checkTypeAndFormat } from "../../../utils/object-verifier.js";

const { User } = mongoModels;
const userType = {
  email: {
    type: 'string',
    regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  password: { 
    type: 'string',
    regex: /(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/
  }
}

const signupCallback = async (req, res) => {
  const { email, password } =  req.body;
  const createUserData = {email: email, password: await hashManager.hash(password)};
  const isDataGood = typeVerificator(userType, createUserData);
  const isFormatDataGood = checkTypeAndFormat(userType, createUserData)
 
  if (isDataGood && isFormatDataGood) {
    
    const createUser = await User.create(createUserData);
    if (createUser.status) {

      return res.send('utilisateur créer');
    }
  }
  const errorMessage = (isDataGood && !isFormatDataGood) ? 'invalid password or email format' : 'Bad Request';

  return res.status(400).send(errorMessage);
}

export const signupRooter = {
  type: 'post',
  route: '/api/auth/signup', 
  callback : signupCallback
}