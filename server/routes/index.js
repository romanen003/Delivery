import express from 'express';
import {checkAuthorize} from './check-authorize';

const routes = express.Router();

routes.use('/auth', checkAuthorize);

module.exports = routes;
