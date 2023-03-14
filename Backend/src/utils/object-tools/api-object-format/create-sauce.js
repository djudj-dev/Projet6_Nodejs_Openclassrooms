import { typeVerificator, regexVerificator } from './../index.js';
import { sauceTypeSchema } from './../index.js';

/**
 * @file manage the function for format the sauce creation object
 * for the API controller @postSauceController
 * @createSauceFormat
 * @param { object } sauceObject is the object with data to format 
 * @returns { object : {
 *   userId: string,
 *   name: string, 
 *   imageUrl: string,
 *   mainPepper: string,
 *   heat: number,
 *   description: string,
 *   manufacturer: string,
 *   likes: number,
 *   dislikes: number,
 *   userLiked: string[],
 *   userDisliked: string[]
 * }}; object use for create sauce in DB
**/

export const createSauceFormat = (sauceObject) => {
  const { imgUrl, sauce } = sauceObject;
  const sauceDataObject = typeof(sauce) === 'string'
    ? JSON.parse(sauce)
    : sauce;
  const isDataValid = typeVerificator(sauceTypeSchema, sauceDataObject)
    ? regexVerificator(sauceTypeSchema, sauceDataObject)
     ? true 
     : false
    : false;
  
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