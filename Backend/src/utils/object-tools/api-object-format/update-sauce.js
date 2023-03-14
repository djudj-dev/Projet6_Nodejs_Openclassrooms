import { typeVerificator, regexVerificator } from './../index.js';
import { sauceTypeSchema } from './../index.js';

/**
 * @file manage the function for format the sauce update object
 * for the API controller @putSauceController
 * @updateSauceFormat
 * @param { object } sauceObject is the object with data to format 
 * @returns { object : {
 *   userId: string,
 *   name: string, 
 *   imageUrl: string,
 *   mainPepper: string,
 *   heat: number,
 *   description: string,
 *   manufacturer: string,
 * }}; object use for update sauce in DB
**/

export const updateSauceFormat = (sauceObject) => {
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
      name: sauceDataObject.name,
      manufacturer: sauceDataObject.manufacturer,
      description: sauceDataObject.description,
      heat: sauceDataObject.heat,
      userId: sauceDataObject.userId,
      mainPepper: sauceDataObject.mainPepper,
      imageUrl: imgUrl
    } 
  : false;
}
