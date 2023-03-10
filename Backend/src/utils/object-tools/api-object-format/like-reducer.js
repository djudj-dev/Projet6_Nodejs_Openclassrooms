export const likeReducer = (userId, like, { usersLiked, usersDisliked }) => {
  switch (like) {
    case 1 :

      return {$inc: {likes: 1}, $push: {usersLiked: userId}};
    case -1 :

      return {$inc: {dislikes: 1}, $push: {usersDisliked: userId}};
    case 0 :

      if( usersLiked.some(element => element === userId)){

        return {$inc: {likes: -1}, $pull: {usersLiked: userId}};
      } else if (usersDisliked.some(element => element === userId)){

        return {$inc: {dislikes: -1}, $pull: {usersDisliked: userId}};
      } else {

        return {};
      }
    default :

      return false;
  }
}