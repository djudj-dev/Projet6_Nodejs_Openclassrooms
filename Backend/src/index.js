import express, { json } from 'express';
import bodyParser from 'body-parser';
import { mongoModels } from "./mongoDB/index.js";
import { mongoConnection } from './mongoDB/index.js';
import { rooter } from './api/rooter.js';

const app = express();
app.use(bodyParser.json())
app.use(rooter);

app.listen(process.env.SERVER_PORT, async () => {
  console.log('l\'API est lancée');
})