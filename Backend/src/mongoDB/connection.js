import { createConnection } from 'mongoose';
import { logString, consoleColors } from './../utils/string.js';

const { db_connection_success, db_connection_error } = logString;

const atlasConnectionCreator = () => {
  let connection;
  
  try {
    connection = createConnection(process.env.ATLAS_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log(consoleColors.FgGreen, db_connection_success);
  } catch (error) {
    console.error(db_connection_error, error);
  }

  return connection;
}

export const mongoConnection = atlasConnectionCreator();