import { mongoModels } from './../../mongoDB/index.js';
import { typeVerificator, regexVerificator } from './../../utils/object-tools/index.js';
import { idTypeSchema, sauceTypeSchema } from './../../utils/object-tools/index.js';
import { updateSauceFormat } from './../../utils/object-tools/index.js';
import { logString } from './../../utils/string.js';

/**
 * @file Manage the API sauce end-point controllers
 * @getSauceController return the sauce with the id in urlParams
 * @deleteSauceController delete the sauce with the id in urlParams
 * @putSauceController modify the sauce with the id in urlParams,
 * that use the updateSauceFormat function for split the controller logic 
 * all function use the Sauce model for DB interaction 
**/

const {
  api_unauthorized,
  api_bad_request,
  api_not_found,
  deleted_succes,
  put_success
} = logString;
const { Sauce: { findOne, deleteOne, updateOne }} = mongoModels;

export const getSauceController = async (req, res) => {
  const isParamsValid = typeVerificator(idTypeSchema, req.params);
  const { params: { id }} = req;

  if (isParamsValid && id) {
    const { status, data } = await findOne({_id: id});

    if (status) {

      return res.send(data);
    }
  }

  return res.status(404).send(api_not_found);
}

export const deleteSauceController = async (req, res) => {
  const isParamsValid = typeVerificator(idTypeSchema, req.params);
  const { params: { id }} = req;

  if (isParamsValid && id) {
    const { status } = await deleteOne({_id: id});

    if (status) {

      return res.send({message: deleted_succes});
    }
  }

  return res.status(404).send(api_not_found);
}

export const putSauceController = async (req, res) => {
  const isParamsValid = typeVerificator(idTypeSchema, req.params);
  const {_body , params: { id }, body } = req;
  const test = regexVerificator(sauceTypeSchema, body);
  const updateSauceObj = _body 
    ? typeVerificator(sauceTypeSchema, body)
      && regexVerificator(sauceTypeSchema, body)
      ? body
      : false
    : updateSauceFormat(body);

  if (isParamsValid && updateSauceObj) {
    const { data:{ userId }} = await findOne({_id: id});

    if (userId === updateSauceObj.userId) {
      const { status, data } = await updateOne({_id: id}, updateSauceObj);

      if (status) {

        return res.send({message: put_success + data.id});
      }
    }

    return res.status(403).send(api_unauthorized);
  }

  return res.status(400).send(api_bad_request);
}