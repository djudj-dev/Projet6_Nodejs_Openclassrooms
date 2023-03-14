/**
 * @file manage the function for reduce all case for like 
 * in @likeSauceController
 * @likeReducer
 * @param { string } userId is id of user like | dislike 
 * @param { number: -1|0|1 } like number use for manage case
 * @param {
 *  usersLiked: string[],
 *  usersDisliked: [] 
 * },need to be result of DB request with those fields
 * @returns { object : {
 *   $inc: { like | dislike : number },
 *   $push | $pull { usersDisliked | usersLiked: string } 
 * }}; object use for update sauce likes
**/

export const likeReducer = (userId, like, { usersLiked, usersDisliked }) => {
  switch (like) {
    case 1 :

      return { $inc: { likes: 1 }, $push: { usersLiked: userId }};
    case -1 :

      return { $inc: { dislikes: 1 }, $push: { usersDisliked: userId }};
    case 0 :

      if( usersLiked.some(element => element === userId)){

        return { $inc: { likes: -1 }, $pull: { usersLiked: userId }};
      } else if (usersDisliked.some(element => element === userId)){

        return { $inc: { dislikes: -1 }, $pull: { usersDisliked: userId }};
      } else {

        return {};
      }
    default :

      return false;
  }
}