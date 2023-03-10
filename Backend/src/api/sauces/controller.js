import { createSauceFormat } from './../../utils/object-tools/index.js';
import { mongoModels } from './../../mongoDB/index.js';
import { logString } from './../../utils/string.js';

/**
 * @file Manage the API sauce end-point controllers
 * @getSaucesController return all the DB sauces
 * @postSauceController create the sauce with body of the request,
 * that use the createSauceFormat function for split the controller logic 
 * all function use the Sauce model for DB interaction 
**/

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