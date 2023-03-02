import { mongoConnection } from "./connection.js";
import  * as schemas from './schema/index.js';

const createModels = (connection, {...schemaObjects}) => {
  const modelsObject= {};
  Object.entries(schemaObjects).forEach(([,{name, schema}]) => {
    let newModel= {};
    console.log('création de la collection :', name);
    try {
      newModel['model'] = connection.model(name, schema);
      console.log('Reussi');
    } catch {
      console.error('Erreur dans la création de collection : ', error)
    }
    newModel['create'] = createClosure(newModel.model, name);
    modelsObject[name] = newModel;
  });

  return modelsObject;
};

const createClosure = (mongoModel, modelName) => (
  async (createObject) => {
    let requestReturn = {};
    try {
      requestReturn.data = await new mongoModel(createObject).save();
      requestReturn.status = true;
      console.log(`creation d'un(e) ${modelName}`);
      console.log(requestReturn.data);
   } catch (error) {
      requestReturn.status = false;
      console.error(`Erreur dans la création d'un(e) ${modelName} | Error => `, error)
   }

   return requestReturn;
  }
)

export const mongoModels = createModels(mongoConnection, schemas);