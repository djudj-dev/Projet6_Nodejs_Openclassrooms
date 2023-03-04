import { createSauceObject } from '../../utils/object-tools/create-sauce.js';
import { mongoModels } from './../../mongoDB/index.js'

const { Sauce: { findAll, create }} = mongoModels
const { ENV_URL, PUBLIC_IMAGES } = process.env;

export const getSaucesController = async (req, res) => {
  const { status, data } = await findAll();
  if (status) {
    return res.send(data)
  }
  return res.status(404).send('not fount');
}

export const postSauceController = async (req, res) => {
  const { imgName, sauce } = req.body;
  const createSauceObj = createSauceObject(sauce, `${ENV_URL + PUBLIC_IMAGES}/${imgName}`);
  if (imgName && createSauceObj) {
    const { status, data } = await create(createSauceObj);
    if(status){

      return res.send({message: `créer avec succes le contenue : ${data.id}`});
    }
  }

  return res.status(400).send('bad request');
}