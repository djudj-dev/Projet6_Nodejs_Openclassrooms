export const likeTypeSchema = {
  like: {
    type: 'number'
  },  
  userId: {
    type: 'string',
    regex: /^[0-9a-z]{24}$/
  }, 
}