import {ADD_NOTIFICATION, DELETE_NOTIFICATION} from './constants';
import {NotificationType} from './reducer';

export const addNotification  = (payload: NotificationType) => ({
    type: ADD_NOTIFICATION,
    payload
});
export const deleteNotification = (id: number) => ({
    type: DELETE_NOTIFICATION,
    payload: {
        id
    }
});
