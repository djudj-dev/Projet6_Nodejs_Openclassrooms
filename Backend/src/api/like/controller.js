import { mongoModels } from './../../mongoDB/models.js';
import { typeVerificator } from '../../utils/object-tools/object-verifier.js';
import { likeTypeSchema } from '../../utils/object-tools/type-checker/index.js';

const { Sauce: { findOne, updateOne }} = mongoModels

export const likeSauceController = async (req, res) => {
  const { params: { id }, body } = req
  const isDataGood = typeVerificator(likeTypeSchema, body)
  if (id && userId) {
    const { status, data } = await findOne({_id: id})
    const { like, userId } = body; 
    if (status) {
      let UpdateData;
      
      switch (like) {
        case 1 :
          UpdateData = { $inc: { likes: 1 }, $push: { usersLiked: userId }};
          break
        case -1 :
          UpdateData = { $inc: { dislikes: 1 }, $push: { usersDisliked: userId }};
          break
        case 0 :
          if( data.usersLiked.some(element => element === userId)){
            UpdateData = { $inc: { likes: -1 }, $pull: { usersLiked: userId }};
          } else if (data.usersDisliked.some(element => element === userId)){
            UpdateData = { $inc: { dislikes: -1 }, $pull: { usersDisliked: userId }};
          } else {
            UpdateData = {};
          }
          break
      }
      const request = await updateOne({_id: id}, UpdateData);

      if (request.status) {

        return res.send({message: 'liked'});
      }
    }
  }

  return res.status(404).send('not fount');
}