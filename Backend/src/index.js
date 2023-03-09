const timerStart = new Date;
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { apiRouter } from './api/router.js';
import { publicPaths } from './utils/public-path.js';
import { logString, consoleColors } from './utils/string.js';

const { api_success_launch} = logString;
const app = express();

app.use(cors());
app.use(bodyParser.json({limit: '30mb', extended: true}));
app.use(bodyParser.urlencoded({limit: '30mb', extended: true}));
app.use(publicPaths.ROOT, express.static(process.env.PWD+publicPaths.ROOT));
app.use(apiRouter);

app.listen(process.env.SERVER_PORT || 3000, async () => {
  const timerEnd = new Date;
  console.log(consoleColors.FgGreen, api_success_launch((timerEnd - timerStart) / 1000));
})