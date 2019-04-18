import express from 'express';
import {getUsers} from './get-users';

const routes = express.Router();

routes.use('/get-users', getUsers);

module.exports = routes;
