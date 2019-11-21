import {Dispatch} from "redux";
import {request} from '../../utils/request';
import {setData} from "../../store";
import { showError } from "../../store/restaurant/action";

const RESTAURANT_URL = '/api/restaurant';

export const getRestaurantData = (params: {[key: string]: any}) => (dispatch: Dispatch) => {
    const data = Object.entries(params);

    return new Promise((resolve, reject) => {
        let fetchCount = 0;
        let errorCount = 0;
        // @ts-ignore
        let result = [];
        const checkFinally = () => {
            if (errorCount && errorCount === data.length){
                return reject(new Error('ошибочка'));
            }
            if (fetchCount === data.length) {
                // @ts-ignore
                return resolve(result)
            }
        };

        data.forEach(item => {
            request.request({
                url: RESTAURANT_URL,
                method: request.method.GET,
                params: item
            })
                .then(({data}) => {
                    // @ts-ignore
                    result = [...result,...data];
                })
                .catch(() => {
                    ++errorCount
                })
                .finally(() => {
                    ++fetchCount;
                    checkFinally();
                })
        })
    })
        .then((response) => dispatch(setData(response)))
        .catch(() => dispatch(showError(true)))

};
