import { typeVerificator } from './object-verifier.js';
import { sauceTypeSchema } from './type-checker/index.js';

export const createSauceFormat = (sauceObject) => {
  const { imgUrl, sauce } = sauceObject;
  const sauceDataObject = typeof(sauce) === 'string'
    ? JSON.parse(sauce)
    : sauce;
  const isDataValid = typeVerificator(sauceTypeSchema, sauceDataObject);
  
  return isDataValid 
  ? {
      userId: sauceDataObject.userId,
      name: sauceDataObject.name, 
      imageUrl: imgUrl,
      mainPepper: sauceDataObject.mainPepper,
      heat: sauceDataObject.heat,
      description: sauceDataObject.description,
      manufacturer: sauceDataObject.manufacturer,
      likes: 0,
      dislikes: 0,
      userLiked: [],
      userDisliked: []
    }
  : false;
}