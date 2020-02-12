import express from 'express';
import {checkAuthorize} from './check-authorize';
import {restaurant} from './restaurant';
import {dictionaries} from './dictionaries/dictionaries';

export const routes = express.Router();

routes.use('/auth', checkAuthorize);
routes.use('/restaurant', restaurant);
routes.use('/dictionary', dictionaries);
