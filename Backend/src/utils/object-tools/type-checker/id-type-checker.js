/**
 * @file export @idTypeSchema 
 * wich use for verify type and regex with :
 * @typeVerificator & @regexVerificator
**/

export const idTypeSchema = {
  id: {
    type : 'string',
    regex: /^[0-9a-z]{24}$/
  }
}