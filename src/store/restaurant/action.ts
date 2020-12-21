import {
    SET_DATA,
    GET_RESTAURANTS_ACTION_SAGA
} from './constants';

export const setData = (payload: {[key: string]: any}) => ({ type: SET_DATA, payload });

export const getRestaurantsActionSaga = () => ({ type: GET_RESTAURANTS_ACTION_SAGA });