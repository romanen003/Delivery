import express from 'express';
import RestaurantData from './data.json';

export const Restaurant = express.Router();

Restaurant.get('', (request, response) => {
    const {data} = RestaurantData;
    return response.json({
        data,
        total: data.length
    })
});
