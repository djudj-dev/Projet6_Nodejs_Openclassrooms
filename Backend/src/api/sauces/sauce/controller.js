import { mongoModels } from "../../../mongoDB/index.js"

const { Sauce: { findOne, deleteOne }} = mongoModels

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
      return res.send('deleted');
    }
  }
  return res.status(404).send('not fount');
}