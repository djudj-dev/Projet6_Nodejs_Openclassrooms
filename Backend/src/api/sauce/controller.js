import { mongoModels } from './../../mongoDB/index.js'
import { typeVerificator } from '../../utils/object-tools/object-verifier.js';
import { sauceTypeSchema } from '../../utils/object-tools/type-checker/index.js';

const { Sauce: { findOne, deleteOne, updateOne }} = mongoModels
const { ENV_URL, PUBLIC_IMAGES } = process.env;

export const getSauceController = async (req, res) => {
  const { params: { id }} = req;
  if (id) {
    const { status, data } = await findOne({_id: id})
    if (status) {
      return res.send(data);
    }
  }
  return res.status(404).send('not fount');
}

export const deleteSauceController = async (req, res) => {
  const { params: { id }} = req;
  if (id) {
    const { status, data } = await deleteOne({_id: id})
    if (status) {
      return res.send({message: 'deleted'});
    }
  }
  return res.status(404).send('not fount');
}

export const putSauceController = async (req, res) => {
  const {_body , params: { id }, body } = req;
  let updateSauceObj;
  if (_body){
    updateSauceObj = body;
  } else if (body.imgName){
    const { imgName, sauce } = body;
    const incomingData = JSON.parse(sauce);
    updateSauceObj = typeVerificator(sauceTypeSchema, incomingData)
      ? {
        name: incomingData.name,
        manufacturer: incomingData.manufacturer,
        description: incomingData.description,
        heat: incomingData.heat,
        userId: incomingData.userId,
        mainPepper: incomingData.mainPepper,
        imageUrl: `${ENV_URL + PUBLIC_IMAGES}/${imgName}`
      } 
      : null;
  }
  if (updateSauceObj && id) {
    const { status, data } = await updateOne({_id: id},updateSauceObj);
    if(status){

      return res.send({message: `modifier avec succes le contenue : ${data.id}`});
    }
  }

  return res.status(400).send('bad request');
}