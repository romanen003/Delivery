import express from 'express';
import {checkAuthorize} from './check-authorize';

const routes = express.Router();

routes.use('/check-authorize', checkAuthorize);

module.exports = routes;
