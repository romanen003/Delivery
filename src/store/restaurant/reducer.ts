import { AnyAction } from "redux";
import { SET_DATA } from './constants';

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
    data: Array<RestaurantType>
}

const InitialState = {
    data: []
};

export const RestaurantReducer = (state: RestaurantStoreType  = InitialState, action: AnyAction) => {
    switch (action.type) {
        case (SET_DATA):
            return ({
                ...state,
                data: [ ...action.payload ]
            });
        default:
            return state
    }
};
