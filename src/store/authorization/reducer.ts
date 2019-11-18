import {AnyAction} from "redux";
import {AUTHORIZATION} from "./constants";

export interface authorizationState {
    authorization: boolean,
    id: number | null,
    data: {[key: string]: any}
}


const initialState: authorizationState = {
    authorization: false,
    id: null,
    data: {}
};

export const AuthorizationReducer = (state = initialState, action: AnyAction): authorizationState  => {
    switch (action.type) {
        case AUTHORIZATION:
            return {
                ...state,
                authorization: action.payload
            };
        default :
            return state;
    }
};
