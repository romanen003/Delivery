import {Dispatch} from "redux";
import {request} from '../../utils/request';
import {setData} from "../../store";

const RESTAURANT_URL = '/api/restaurant';

export const getRestaurantData = (params: {[key: string]: any}) => (dispatch: Dispatch) => {
    request.request({
        url: RESTAURANT_URL,
        method: request.method.GET,
        params
    })
        .then(response => response.json())
        .then(({data}) => dispatch(setData(data)))
};
