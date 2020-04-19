import { AnyAction } from "redux";
import { LOADING } from "./constants";

export interface LoadingState {
    loading: boolean
}

const InitialState = {
    loading: false
};

export const LoadingReducer = (state: LoadingState = InitialState, action: AnyAction) => {
    switch (action.type) {
        case LOADING.ACTIVE :
            return { loading: true };
        case LOADING.NOT_ACTIVE:
            return { loading: false };
        default:
            return state;
    }
};
