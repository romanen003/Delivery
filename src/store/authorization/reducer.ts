import {AnyAction} from "redux";

interface AuthorizationState {
    authoriz: boolean,
    id: number | null
}


const initialState: AuthorizationState = {
    authoriz: false,
    id: null
};

export const AuthorizationReducer = (state = initialState, action: AnyAction): AuthorizationState  => {
    switch (action.type) {
        case ('AUTH'):
            return {
                ...state,
                authoriz: action.payload
            };
        default :
            return state;
    }
};
