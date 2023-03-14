## All whats you need for a good use: 

### Add all env variables :
  for the server and db : 
  - ATLAS_URI: Use by the database connection
  - SERVER_PORT: Use by the API 
  - ENV_URL: Use by the API
  - NODE_ENV: Use by the API
  (info: if NODE_ENV=production all console.log are disabled)

  for the security
  - JWT_SECRET_KEY: Use by the tokenManager
  - JWT_EXPIRE_TIME: Use by the tokenManager
  - PASSWORD_INCREASE: Use by the hashManager

  for the public path info 
  - PUBLIC_ROOT: Use by the static API
  - PUBLIC_IMAGES: Use by the static API
  (info: all public path need to be written PUBLIC_PATHNAME)

#### exemple : 
```
  ATLAS_URI=mongodb+srv://test:password@yourcluster.mongodb.net/
  SERVER_PORT=3000
  ENV_URL=http://localhost:3000
  NODE_ENV= local 

  JWT_SECRET_KEY=SecretKeyNeedToBeStrong
  JWT_EXPIRE_TIME=1h
  PASSWORD_INCREASE=WriteALongStringForIncreaseUserPasswordStrength

  PUBLIC_ROOT=/public
  PUBLIC_IMAGES=/public/images
```
### when it's good you only need to have node and npm (or yarn or pnpm)
First of all ```npm install```

And ```npm run start```