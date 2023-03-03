import express from 'express';
import bodyParser from 'body-parser';
import { rooter } from './rooter.js';

const app = express();
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use('/public', express.static(`${process.env.PWD}/public`));
app.use(rooter);

app.listen(process.env.SERVER_PORT, async () => {
  console.log('l\'API est lancée');
})