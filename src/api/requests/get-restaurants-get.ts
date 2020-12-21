import { request } from '../utils/request';

export const getRestaurantsGetRequest = () => request.request({
    url: '/api/restaurant',
    method: request.method.GET
})