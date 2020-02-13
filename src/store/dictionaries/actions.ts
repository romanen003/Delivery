import { request } from "../../utils/request";
import {
    DICTIONARIES_FETCH_SUCCESS,
    DICTIONARIES_FETCH_FAIL,
    DICTIONARY_URL
} from "./constants";

export const fetchDictionariesSuccess = (payload: Object) => ({
    type: DICTIONARIES_FETCH_SUCCESS,
    payload
});
export const fetchDictionariesFail = (payload: Array<string>) => ({
    type: DICTIONARIES_FETCH_FAIL,
    payload
});

export const fetchCitiesDictionary = () => {
    return request.request({
        url: DICTIONARY_URL.CITIES,
        method: request.method.GET
    })
};
export const fetchTypesFoodDictionary = () => {
    return request.request({
        url: DICTIONARY_URL.TYPES_FOOD,
        method: request.method.GET
    })
};
