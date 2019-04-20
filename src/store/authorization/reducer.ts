import {AnyAction} from "redux";

export interface authorizationState {
    authorization: boolean,
    id: number | null
}


const initialState: authorizationState = {
    authorization: false,
    id: null
};

export const AuthorizationReducer = (state = initialState, action: AnyAction): authorizationState  => {
    switch (action.type) {
        case ('AUTH'):
            return {
                ...state,
                authorization: action.payload
            };
        default :
            return state;
    }
};
