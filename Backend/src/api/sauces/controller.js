import { createSauceFormat } from '../../utils/object-tools/create-sauce.js';
import { mongoModels } from './../../mongoDB/index.js';
import { logString } from '../../utils/string.js';

const {
  api_bad_request,
  api_not_found,
  post_succes
} = logString;
const { Sauce: { findAll, create }} = mongoModels;

export const getSaucesController = async (req, res) => {
  const { status, data } = await findAll();

  if (status) {

    return res.send(data);
  }

  return res.status(404).send(api_not_found);
}

export const postSauceController = async (req, res) => {
  const createSauceObj = createSauceFormat(req.body);

  if (createSauceObj) {
    const { status, data } = await create(createSauceObj);

    if (status) {

      return res.send({message: post_succes + data.id});
    }
  }

  return res.status(400).send(api_bad_request);
}