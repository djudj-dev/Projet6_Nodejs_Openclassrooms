/**
 * @file export @likeTypeSchema
 * wich use for verify type and regex with :
 * @typeVerificator & @regexVerificator
**/

export const likeTypeSchema = {
  like: {
    type: 'number'
  },  
  userId: {
    type: 'string',
    regex: /^[0-9a-z]{24}$/
  }, 
}