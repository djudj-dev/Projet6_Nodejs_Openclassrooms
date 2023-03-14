import { logString } from './string.js';

/**
 * @file manage the object of closure use for @createModels
 * @modelsClosure contains all preformated function wich use 
 * regularly in the API
**/

const {
  models_closures_success_create,
  models_closures_error_create,
  models_closures_success_findOne,
  models_closures_error_finOne,
  models_closures_success_findAll,
  models_closures_error_finAll,
  models_closures_success_delete,
  models_closures_error_delete,
  models_closures_success_updateOne,
  models_closures_error_updateOne
} = logString;

export const modelsClosures = {
  create: (mongoModel, modelName) => (
    async (createObject) => {
      let requestReturn = {};
      
      try {
        requestReturn.data = await new mongoModel(createObject).save();
        requestReturn.status = true;
        console.log(models_closures_success_create, modelName);
        console.log(requestReturn.data);
      } catch (error) {
        requestReturn.status = false;
        requestReturn.data = { error : error };
        console.error(models_closures_error_create, error);
      }
      
      return requestReturn;
    }
  ),
  findOne: (mongoModel, modelName) => (
    async (findOneObject) => {
      let requestReturn = {};
      
      try {
        requestReturn.data = await mongoModel.findOne(findOneObject);
        requestReturn.status = true;
        console.log(models_closures_success_findOne, modelName);
        console.log(requestReturn.data);
      } catch (error) {
        requestReturn.status = false;
        requestReturn.data = { error : error };
        console.error(models_closures_error_finOne, error);
      }
      
      return requestReturn;
    }
    ),
    findAll: (mongoModel, modelName) => (
    async () => {
      let requestReturn = {};
      
      try {
        requestReturn.data = await mongoModel.find({});
        requestReturn.status = true;
        console.log(models_closures_success_findAll, modelName);
        console.log(requestReturn.data);
      } catch (error) {
        requestReturn.status = false;
        requestReturn.data = { error : error };
        console.error(models_closures_error_finAll, error);
      }
  
      return requestReturn;
    }
    ),
    deleteOne: (mongoModel, modelName) => (
      async (deleteObject) => {
        let requestReturn = {};
        
        try {
          requestReturn.data = await mongoModel.deleteOne(deleteObject);
          requestReturn.status = true;
          console.log(models_closures_success_delete, modelName);
          console.log(requestReturn.data);
        } catch (error) {
          requestReturn.status = false;
          requestReturn.data = { error : error };
          console.error(models_closures_error_delete, error);
        }
        
        return requestReturn;
    }
  ),
  updateOne: (mongoModel, modelName) => (
    async (id, updateOneObject) => {
      let requestReturn = {};
      
      try {
        requestReturn.data = await mongoModel.updateOne(id, updateOneObject);
        requestReturn.status = true;
        console.log(models_closures_success_updateOne, modelName);
        console.log(requestReturn.data);
      } catch (error) {
        requestReturn.status = false;
        requestReturn.data = { error : error };
        console.error(models_closures_error_updateOne, error);
     }
  
     return requestReturn;
    }
  )
}