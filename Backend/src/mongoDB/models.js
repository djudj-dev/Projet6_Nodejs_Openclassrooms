import { mongoConnection } from "./connection.js";
import { modelsClosure } from "../utils/models-closure.js";
import  * as schemas from './schema/index.js';

const createModels = (connection, modelsClosure,{...schemaObjects}) => {
  const modelsObject= {};
  
  Object.entries(schemaObjects).forEach(([,{name, schema}]) => {
    let newModel= {};
    
    try {
      newModel['model'] = connection.model(name, schema);
      console.log('création de la collection :', name);
    } catch {
      console.error('Erreur dans la création de collection : ', error)
    }

    Object.entries(modelsClosure).forEach(([key, value]) => (
      newModel[key] = value(newModel.model, name)
    ));

    modelsObject[name] = newModel;
  });

  return modelsObject;
};

export const mongoModels = createModels(mongoConnection, modelsClosure, schemas);