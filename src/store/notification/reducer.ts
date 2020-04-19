import { AnyAction } from "redux";
import {
    ADD_NOTIFICATION,
    DELETE_NOTIFICATION
} from "./constants";

export interface NotificationType {
    type: string,
    title: string,
    description?: string,
    lifeTime: number,
    id: number
}

let ID: number = 1;

const InitialState: Array<NotificationType> = [];

export const NotificationReducer = (state = InitialState, action: AnyAction) => {
    switch(action.type) {
        case (ADD_NOTIFICATION):
            return [
                ...state,
                {
                    description: '',
                    lifeTime: 5000,
                    ...action.payload,
                    id: ++ID
                }
            ];
        case (DELETE_NOTIFICATION):
            return [
                ...state.filter(item => item.id !== action.payload.id)
            ];
        default:
            return state
    }
};
