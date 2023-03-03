import { mongoModels } from "../../../mongoDB/index.js"
import { tokenManager } from "../../../utils/jwt.js";

const { Sauce: { findOne, updateOne }} = mongoModels

export const likeSauceController = async (req, res) => {
  const { params: { id }} = req
  const isLiked = !!req.body.like;
  const token = req.headers.authorization.split(' ')[1];
  const userId = tokenManager.verify(token).id;

  if (id && userId) {
    const { status, data } = await findOne({_id: id})
    if (status) {
      const UpdateData = isLiked 
        ? {'likes': (data.likes + 1), 'usersLiked': [...data.usersLiked, userId]}
        : {'dislikes': (data.dislikes + 1), 'usersDisliked': [...data.usersDisliked, userId]}
      const request = await updateOne(
        {_id: id}, 
        {$set: UpdateData})
      return res.send(data);
    }
  }

  return res.status(404).send('not fount');
}