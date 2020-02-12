import express from 'express';
import Cities from './cities';
import TypesFood from './types-food-data';

export const dictionaries = express.Router();

dictionaries.get('/cities', (request, response) => {
    const {data} = Cities;

    return response.json({
        data,
        total: data.length
    })
});
dictionaries.get('/typesFood', (request, response) => {
    const {data} = TypesFood;

    return response.json({
        data,
        total: data.length
    })
});
