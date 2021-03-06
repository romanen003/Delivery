import express from 'express';
import RestaurantData from './data.json';

export const restaurant = express.Router();

restaurant.get('', (request, response) => {
    const {data} = RestaurantData;
    setTimeout(() => {
        return response.status(200).json({
            data,
            total: data.length
        })
    }, 1000)
});
