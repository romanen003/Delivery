import {AnyAction} from "redux";
import {MODAL_ACTION} from "./constants";

export interface Modal {
    name: string
}

const initialState: Array<Modal> = [];

export const ModalsReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        case (MODAL_ACTION.SHOW):
            return [
                ...state,
                action.payload
            ];
        case (MODAL_ACTION.CLOSE):
            let nextState = [...state];

            if (nextState.length > 0) {
                nextState.pop();
            }

            return nextState;
        default:
            return state;
    }
};
