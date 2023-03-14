import fs from 'node:fs';
import { logString, consoleColors } from './string.js';

/**
 * @file manage the object wich manage the public path for img etc..
 * @getPublicPaths return all public path written in env
 * @createPublicPath create public path folder if they don't exist
 * and return the @publicPathObj with all routes of public paths
**/

const { public_path_create, public_path_allreadyExist } = logString;
const { env: { PWD , ...env } } = process;
const publicPathRegex = /^PUBLIC_/;

const getPublicPaths = (regex, envVariable) => {
  let publicPaths = {};

  for (let key in envVariable) {

    if (regex.test(key)) {
      publicPaths[key.split('_')[1]] = envVariable[key];
    }
  }

  return publicPaths;
}

const createPublicPath = (projectRoot, publicPathObj) => {

  Object.entries(publicPathObj).forEach(([key, value]) => {

    if (!fs.existsSync(projectRoot+value)) {
      fs.mkdirSync(projectRoot+value);
      console.log(consoleColors.FgGreen,`${key} : ${value} `+ public_path_create);
    } else {
      console.log(consoleColors.FgCyan,`${key} : ${value} `+ public_path_allreadyExist);
    };
  })

  return publicPathObj;
}

export const publicPaths = createPublicPath(PWD, getPublicPaths(publicPathRegex, env));