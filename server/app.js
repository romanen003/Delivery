import express from 'express';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import {ServerParams, KEEP_ALIVE_TIMEOUT} from './constants';
import routes from './routes';

const app = express();
const {PORT, HOST} = ServerParams;
const listenCallback = error => error
  ? console.log('something bad happened', error)
  : console.log(`Listening on port ${PORT}!`);

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(fileUpload());
app.use('/static', express.static(`${__dirname}/public`));
app.use('/api', routes);

const appServer = app.listen(PORT, HOST, listenCallback);

appServer.keepAliveTimeout = KEEP_ALIVE_TIMEOUT;
