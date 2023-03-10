import { typeVerificator, regexVerificator } from './../index.js';
import { sauceTypeSchema } from './../index.js';

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
