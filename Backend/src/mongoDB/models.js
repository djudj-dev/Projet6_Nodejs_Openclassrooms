import { mongoConnection } from './connection.js';
import { modelsClosures } from '../utils/models-closure.js';
import { logString , consoleColors } from '../utils/string.js';
import * as schemas from './schema/index.js';

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