/**
 * @file export @userTypeSchema
 * wich use for verify type and regex with :
 * @typeVerificator & @regexVerificator
**/

export const userTypeSchema = {
  email: {
    type: 'string',
    regex: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
  },
  password: { 
    type: 'string',
    regex: /^[A-Za-z0-9._!#$%&’()*+,\-/:;<=>?@[^`{\]|}~]{8,30}$/
  }
}