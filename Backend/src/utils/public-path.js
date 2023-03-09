import fs from 'node:fs';
import { logString, consoleColors } from './string.js';

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