import {AnyAction} from "redux";

interface AutorizationState {
    autoriz: boolean,
    id: number | null
}


const initialState: AutorizationState = {
    autoriz: false,
    id: null
};

export const AuthorizationReducer = (state = initialState, action: AnyAction): AutorizationState  => {
    switch (action.type) {
        case ('AUTH'):
            return {
                ...state,
                autoriz: action.payload
            };
        default :
            return state;
    }
};
