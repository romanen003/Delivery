import {
    ADD_NOTIFICATION,
    DELETE_NOTIFICATION,
    DELETE_LAST_NOTIFICATION
} from './constants';

export const addNotification  = (payload: Notification) => ({
    type: ADD_NOTIFICATION,
    payload
});
export const deleteNotification = (payload: Notification) => ({
   type: DELETE_NOTIFICATION,
   payload
});
export const deleteLastNotification = (payload: Notification) => ({
    type: DELETE_LAST_NOTIFICATION,
    payload
});