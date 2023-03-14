/**
 * @file manage all the string use in the banckend code base
 * @logString is the object with all the string use
 * @consoleColors is use for change the console text color
**/

export const logString = {

  api_success_launch: (second) => (
    `
______________________________________
|                                    
| Api Success launch in : ${second} sec  
|_____________________________________

`),
  api_bad_request: 'Bad request.',
  api_not_found: 'Not found.',
  api_unauthorized: 'Unauthorized request.',
  
  db_connection_success: 'Successfully connect to Atlas',
  db_connection_error: 'Error on Atlas connection | => ',
  db_model_create: 'Success create model :',
  db_error_model_creation: 'Creation error of collection | => ',

  jwt_sign_error: 'JWT sign error | => ',
  jwt_verify_error: 'JWT verify error | => ',

  pwd_hash_error:'Argon2 hash error | => ',
  pwd_verify_error: 'Argon2 verify error | => ',

  public_path_create: 'created',
  public_path_allreadyExist: 'allready exist',

  models_closures_success_create: 'Successfull creation of : ',
  models_closures_error_create: 'Error in creation of : ',
  models_closures_success_findOne: 'Request of collection : ',
  models_closures_error_finOne: 'Error in request of collection : ',
  models_closures_success_findAll: 'Global request of collection : ',
  models_closures_error_finAll: 'Error in global request of collection : ',
  models_closures_success_delete: 'Document deletion of collection : ',
  models_closures_error_delete: 'Error in document deletion request of collection : ',
  models_closures_success_updateOne: 'Document update of collection : ',
  models_closures_error_updateOne: 'Error in document update request of collection : ',

  img_download: ' was download with new name : ',
  
  auth_request: 'Auth request from: ',
  auth_invalid_credential: 'Invalid password or email.',

  login_success: 'Success login of :',
  login_failed: 'Login faillure of :',

  signup_valid: 'User created successfully : ',
  signup_allready_exist: 'Email already use',

  deleted_succes: 'Successfully deleted',

  put_success: 'Successfully modify content : ',
  post_succes: 'Successfully created content : ',

  liked_success: 'Liked',
}

export const consoleColors = {
  Reset: '\x1b[0m',
  FgBlack: '\x1b[30m%s\x1b[0m',
  FgRed: '\x1b[31m%s\x1b[0m',
  FgGreen: '\x1b[32m%s\x1b[0m',
  FgYellow: '\x1b[33m%s\x1b[0m',
  FgBlue: '\x1b[34m%s\x1b[0m',
  FgMagenta: '\x1b[35m%s\x1b[0m',
  FgCyan: '\x1b[36m%s\x1b[0m',
  FgWhite: '\x1b[37m%s\x1b[0m',
  FgGray: '\x1b[90m%s\x1b[0m',
  BgBlack: '\x1b[40m%s\x1b[0m',
  BgRed: '\x1b[41m%s\x1b[0m',
  BgGreen: '\x1b[42m%s\x1b[0m',
  BgYellow: '\x1b[43m%s\x1b[0m',
  BgBlue: '\x1b[44m%s\x1b[0m',
  BgMagenta: '\x1b[45m%s\x1b[0m',
  BgCyan: '\x1b[46m%s\x1b[0m',
  BgWhite: '\x1b[47m%s\x1b[0m',
  BgGray: '\x1b[100m%s\x1b[0m',
}