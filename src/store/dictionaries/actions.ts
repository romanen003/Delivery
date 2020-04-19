import { customPromiseAll, request } from "../../utils/request";
import {
    DICTIONARIES_FETCH_SUCCESS,
    DICTIONARIES_FETCH_FAIL,
    DICTIONARY_URL
} from "./constants";

const fetchDictionariesSuccess = (payload: Object) => ({
    type: DICTIONARIES_FETCH_SUCCESS,
    payload
});
const fetchDictionariesFail = (payload: Array<string>) => ({
    type: DICTIONARIES_FETCH_FAIL,
    payload
});

const fetchCitiesDictionary = () => request.request({
    url: DICTIONARY_URL.CITIES,
    method: request.method.GET
});
const fetchTypesFoodDictionary = () => request.request({
    url: DICTIONARY_URL.TYPES_FOOD,
    method: request.method.GET
});


export const fetchingAllDictionaries = () =>
    (dispatch: { (arg0: { type: string; payload: Object; }): void;
    (arg0: { type: string; payload: string[]; }): void; }) => {
        const requests = [
            fetchCitiesDictionary(),
            fetchTypesFoodDictionary()
        ];

        customPromiseAll(requests)
            .then((data: any) => dispatch(fetchDictionariesSuccess(data)))
            .catch(error => dispatch(fetchDictionariesFail(error)))
            .finally()
    };
