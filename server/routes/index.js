import express from 'express';
import {checkAuthorize} from './check-authorize';
import {Restaurant} from './restaurant';

const routes = express.Router();

routes.use('/auth', checkAuthorize);
routes.use('/restaurant', Restaurant);

module.exports = routes;
