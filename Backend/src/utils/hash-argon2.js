import  argon2 from "argon2";

export const hashManager = {
  hash: async (password) => {
    let hashedPassword;
    try {
      hashedPassword = await argon2.hash(password+process.env.PASSWORD_INCREASE);
    } catch (error) {
      console.error('Erreur au hashage du password | Erreur => ', error)
      hashedPassword = false;
    }

    return hashedPassword;
  },
  verify: async (clearPassword ,hashedPassword) => {
    let isVerified; 
    try {
      isVerified = await argon2.verify(hashedPassword, (clearPassword+process.env.PASSWORD_INCREASE)) 
    } catch (error) {
      console.error('Erreur au dechifrage du password | Erreur => ', error);
      isVerified = false;
    }

    return isVerified;
  }
}