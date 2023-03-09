import { mongoModels } from './../../mongoDB/models.js';
import { likeReducer } from '../../utils/object-tools/like-reducer.js';
import { typeVerificator } from '../../utils/object-tools/object-verifier.js';
import { likeTypeSchema } from '../../utils/object-tools/type-checker/index.js';
import { logString } from '../../utils/string.js';

const { api_not_found , liked_success } = logString;
const { Sauce: { findOne, updateOne }} = mongoModels;

export const likeSauceController = async (req, res) => {
  const isDataGood = typeVerificator(likeTypeSchema, body);
  const { params: { id }, body } = req;

  if (id && isDataGood) {
    const { status, data } = await findOne({_id: id});
    const { like, userId } = body;

    if (status & data) {
      const UpdateData = likeReducer(userId, like, data);
      const request = await updateOne({_id: id}, UpdateData);

      if (request.status) {

        return res.send({message: liked_success});
      }
    }
  }

  return res.status(404).send(api_not_found);
}