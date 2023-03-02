import { createConnection }  from 'mongoose';

const atlasConnectionCreator = () => {
  let connection;
  try {
    connection = createConnection(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log("connection a Atlas reussi");
  } catch (error) {
    console.error('Erreur de connection a Atlas : ',error);
  }

  return connection;
}

export const mongoConnection = atlasConnectionCreator()