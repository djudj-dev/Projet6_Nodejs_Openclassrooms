import { mongoConnection } from './connection.js';
import { modelsClosures } from './../utils/models-closure.js';
import { logString , consoleColors } from './../utils/string.js';
import * as schemas from './schema/index.js';

/**
 * @file manage all the DB models, collection creation 
 * @createModels create all the models need for the api 
 * @param { object } connection need to bee an mongoDB connection
 * @param {{ () => function, ...() => function }} modelsClosures need to be an object with
 * closure function that use the models for preformated action
 * @param { object } schemaObjects need to be an object with 
 * all the schema off the database needed
 * @return { object }; that will be used later by all the function 
 * that will need to use the db for manage specific models 
 * and common action 
**/

const { db_model_create, db_error_model_creation } = logString;

const createModels = (connection, modelsClosures,{...schemaObjects}) => {
  const modelsObject= {};
  
  Object.entries(schemaObjects).forEach(([,{name, schema}]) => {
    let newModel= {};
    
    try {
      newModel['model'] = connection.model(name, schema);
      console.log(consoleColors.FgGreen, db_model_create, name);
    } catch {
      console.error(db_error_model_creation, error);
    }

    Object.entries(modelsClosures).forEach(([key, value]) => (
      newModel[key] = value(newModel.model, name)
    ));

    modelsObject[name] = newModel;
  });

  return modelsObject;
};

export const mongoModels = createModels(mongoConnection, modelsClosures, schemas);