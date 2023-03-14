/**
 * @file export @sauceTypeSchema
 * wich use for verify type and regex with :
 * @typeVerificator & @regexVerificator
**/

export const sauceTypeSchema = {
  userId: {
    type: 'string',
    regex: /^[0-9a-z]{24}$/
  },
  name: {
    type: 'string',
    regex: /^[A-Za-z -'",.]{3,50}$/
  }, 
  manufacturer: {
    type: 'string',
    regex: /^[A-Za-z0-9 -_'",.]{10,60}$/
  },
  description: {
    type: 'string',
    regex: /^[A-Za-z0-9 -_'",.]{10,120}$/
  }, 
  heat: {
    type: 'number'
  },
  mainPepper: {
    type: 'string',
    regex: /^[A-Za-z0-9 -_'",.]{4,60}$/
  }
}