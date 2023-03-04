import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { router } from './api/router.js';
import { publicPaths } from './utils/public-path.js';


const app = express();
app.use(cors());
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(publicPaths.ROOT, express.static(process.env.PWD+publicPaths.ROOT));
app.use(router);

app.listen(process.env.SERVER_PORT || 3000, async () => {
  console.log('l\'API lancée avec succès');
})