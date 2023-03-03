import { tokenManager } from "../../../utils/jwt.js";
import { mongoModels } from "../../../mongoDB/index.js"

const { Sauce: { findAll, create }} = mongoModels

export const getSaucesController = async (req, res) => {
  const { status, data } = await findAll();
  if (status) {
    return res.send(data)
  }
  return res.status(404).send('not fount');
}

export const postSauceController = async (req, res) => {
  const { imgName, sauce } = req.body;
  const token = req.headers.authorization.split(' ')[1];
  const { id } = tokenManager.verify(token);

  if (imgName && sauce && id) {
    const createSauceObj = {
      userId: id,
      name: sauce, 
      imageUrl: `${process.env.ENV_URL}/public/images/${imgName}`,
      likes: 0,
      dislikes: 0,
      userLiked: [],
      userDisliked: [],
    }
    const { status, data } = await create(createSauceObj)

    if(status){

      return res.send(`créer avec succes le contenue : ${data.id}`);
    }
  }

  return res.status(400).send('bad request');
}