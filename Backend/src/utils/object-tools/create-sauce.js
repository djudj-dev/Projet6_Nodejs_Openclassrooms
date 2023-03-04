import { typeVerificator } from './object-verifier.js';
import { sauceTypeSchema } from './type-checker/index/js';

export const createSauceObject = (sauceObject, imageUrl) => {
  const sauceDataObject = typeof(sauceObject) === 'string' 
    ? JSON.parse(sauceObject)
    : sauceObject
  const isDataValid = typeVerificator(sauceTypeSchema, sauceDataObject)
  
  return isDataValid 
  ? {
    userId: sauceDataObject.userId,
    name: sauceDataObject.name, 
    imageUrl: imageUrl,
    mainPepper: sauceDataObject.mainPepper,
    heat: sauceDataObject.heat,
    description: sauceDataObject.description,
    manufacturer: sauceDataObject.manufacturer,
    likes: 0,
    dislikes: 0,
    userLiked: [],
    userDisliked: [],
  }
  : false
}