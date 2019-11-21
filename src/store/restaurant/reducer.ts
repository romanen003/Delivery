import {AnyAction} from "redux";
import {
    DOWNLOAD_STATUS,
    SET_FILTERS,
    SET_DATA,
    SET_PAGINATION,
    SHOW_ERROR
} from './constants';

export interface RestaurantType {
    id: number,
    nameEn: string,
    nameRu: string,
    rating: string,
    onlinePay: boolean,
    minOrder: string,
    coverImg: string,
    logoImg: string
}

export interface RestaurantStoreType {
    data: Array<RestaurantType>,
    filters: {[key: string]: any},
    pagination: {[key: string]: any},
    loading: boolean
}

const InitialState = {
    data: [],
    filters: [],
    pagination: [],
    loading: false,
    error: false
};

export const RestaurantReducer = (state: RestaurantStoreType  = InitialState, action: AnyAction) => {
    switch (action.type) {
        case (DOWNLOAD_STATUS):
            return ({
                ...state,
                loading: action.payload
            });
        case (SET_PAGINATION):
            return ({
                ...state,
                pagination: {...action.payload}
            });
        case (SET_FILTERS):
            return ({
                ...state,
                filters: {...action.payload}
            });
        case (SET_DATA):
            return ({
                ...state,
                data: [...action.payload]
            });
        case (SHOW_ERROR):
            return ({
                ...state,
                error: action.payload
            });
        default:
            return state
    }
};
