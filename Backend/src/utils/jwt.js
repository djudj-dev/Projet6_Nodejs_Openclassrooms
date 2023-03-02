import jwt from 'jsonwebtoken'; 

const { JWT_SECRET_KEY , JWT_EXPIRE_TIME } = process.env

export const tokenManager = {
  create: (payload) => {
    let tokenSign;
    try {
      tokenSign = jwt.sign(payload, JWT_SECRET_KEY, {expiresIn: JWT_EXPIRE_TIME})
    } catch (error) {
      console.error('Erreur a la signature du jwt | Erreur => ',error)
      tokenSign = false 
    }

    return tokenSign;
  },
  verify: (token) => {
    let tokenVerify;
    try {
      tokenVerify = jwt.verify(token, JWT_SECRET_KEY)
    } catch (error) {
      console.error('Erreur a la verification du jwt | Erreur => ',error)
      tokenVerify = false 
    }

    return tokenVerify;
  }
}