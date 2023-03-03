export const modelsClosure = {
  create: (mongoModel, modelName) => (
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
  ),
  findOne: (mongoModel, modelName) => (
    async (findOneObject) => {
      let requestReturn = {};
      try {
        requestReturn.data = await mongoModel.findOne(findOneObject);
        requestReturn.status = true;
        console.log(`requette ${modelName}`);
        console.log(requestReturn.data);
     } catch (error) {
        requestReturn.status = false;
        console.error(`Erreur dans la requette d'un(e) ${modelName} | Error => `, error)
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
        console.log(`requette global ${modelName}`);
        console.log(requestReturn.data);
     } catch (error) {
        requestReturn.status = false;
        console.error(`Erreur dans la requette global de la collection ${modelName} | Error => `, error)
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
        console.log(`supression d'un(e) ${modelName}`);
        console.log(requestReturn.data);
     } catch (error) {
        requestReturn.status = false;
        console.error(`Erreur dans la supression d'un(e) ${modelName} | Error => `, error)
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
        console.log(`modifiaction d'un(e) ${modelName}`);
        console.log(requestReturn.data);
     } catch (error) {
        requestReturn.status = false;
        console.error(`Erreur dans la modification d'un(e) ${modelName} | Error => `, error)
     }
  
     return requestReturn;
    }
  )
}