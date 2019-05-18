import {AnyAction} from "redux";
import {
    ADD_NOTIFICATION,
    DELETE_NOTIFICATION
} from "./constants";

export interface NotificationType {
    type: string,
    title: string,
    description: string,
    lifeTime: number
}

const InitialState: Array<NotificationType> = [
    {
        type: 'warning',
        title: 'test notification',
        description: 'this is test description for test notification',
        lifeTime: 5000
    },
    {
        type: 'success',
        title: 'test notification',
        description: 'this is test description for test notification',
        lifeTime: 5000
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