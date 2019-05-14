import {AnyAction} from "redux";
import {
    ADD_NOTIFICATION,
    DELETE_NOTIFICATION
} from "./constants";

export interface Notification {
    type: string,
    title: string,
    description: string
}

const InitialState: Array<Notification> = [
    {
        type: 'warning',
        title: 'test notification',
        description: 'this is test description for test notification'
    }
];

export const NotificationReducer = (state = InitialState, action: AnyAction) => {
    switch(action.type) {
        case (ADD_NOTIFICATION):
            return [
                ...state,
                action.payload
            ];
        case (DELETE_NOTIFICATION):
            return [
                ...state
            ];
        default:
            return state
    }
};