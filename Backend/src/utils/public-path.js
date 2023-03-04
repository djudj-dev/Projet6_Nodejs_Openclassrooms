import fs from 'node:fs';

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
      fs.mkdirSync(projectRoot+value)
      console.log(`${key} : ${value} créé`);
    } else {
      console.log(`${key} : ${value} deja existant`);
    };
  })

  return publicPathObj;
}

export const publicPaths = createPublicPath(PWD, getPublicPaths(publicPathRegex, env))