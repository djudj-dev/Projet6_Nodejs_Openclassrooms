import { mongoModels } from "../../../mongoDB/models.js";
import { tokenManager } from "../../../utils/jwt.js";
import { hashManager } from "../../../utils/hash-argon2.js";
import { typeVerificator, regexVerificator } from "../../../utils/object-verifier.js";

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

const loginCallback = async (req, res) => {
  const { email, password } =  req.body;
  const isDataGood = typeVerificator(userType, {email: email, password: password});
  const isFormatDataGood = regexVerificator(userType, {email: email, password: password})

  if (isDataGood && isFormatDataGood) {
    const getUser = await User.model.findOne({email: email});
    const isPasswordValid = (getUser.password && await hashManager.verify(password, getUser.password));
    if (isPasswordValid) {
      const token = tokenManager.create({id: getUser.id});

      return res.send(token);
    }
  }
  const errorMessage = (isDataGood && !isFormatDataGood) ? 'invalid password or email format' : 'Bad Request';

  return res.status(400).send(errorMessage);
}

export const loginRooter = {
  type: 'post',
  route: '/api/auth/login', 
  callback : loginCallback
}