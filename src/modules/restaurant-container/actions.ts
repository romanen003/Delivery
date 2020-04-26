import { Dispatch } from "redux";
import { customPromiseAll, request } from '../../utils/request';
import { setData, onLoading, offLoading } from "../../store";
import { showError } from "../../store/restaurant/action";
import { RestaurantType } from "../../store/restaurant/reducer";

const RESTAURANT_URL = '/api/restaurant';

export const getRestaurantData = (params: {[key: string]: any}) => (dispatch: Dispatch) => {
    const data = Object.entries(params);

    dispatch(onLoading());
    dispatch(setData([]));

    const requests = data.map(item => request.request({
        url: RESTAURANT_URL,
        method: request.method.GET,
        params: item
    }));

    customPromiseAll(requests)
        .then((response:Array<RestaurantType> ) => {
            dispatch(setData(response))
        })
        .catch(() => dispatch(showError(true)))
        .finally(() => dispatch(offLoading()))

};
