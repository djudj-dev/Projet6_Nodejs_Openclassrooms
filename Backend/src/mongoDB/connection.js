import { createConnection } from 'mongoose';
import { logString, consoleColors } from './../utils/string.js';

/**
 * @file manage DB Connection  
 * @mongoConnection will be used later by all the function 
 * that will need to use the db 
**/

process.env.NODE_ENV === 'production' && (console.log = function () {});
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