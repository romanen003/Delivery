import { Dispatch } from "redux";
import {
    closeModal,
    offLoading,
    onLoading,
    setAuthorisation,
    addNotification
} from "../../store";
import { AUTHORIZATION_URL } from "./constants";
import { TYPES } from "../../elements/notification/constants";
import { request } from '../../utils/request';

const successAuthorization = (dispatch: Dispatch) => {
    dispatch(setAuthorisation(true));
    dispatch(offLoading());
    dispatch(addNotification({
        type: TYPES.SUCCESS,
        title: 'Успешная авторизация',
        lifeTime: 5000,
        id: 1
    }));
    dispatch(closeModal());
};

const failureAuthorization = (dispatch: Dispatch) => {
    dispatch(offLoading());
    dispatch(addNotification({
        type: TYPES.ERROR,
        title: 'Ошибка авторизации',
        description: 'Ошибка авторизации',
        lifeTime: 5000,
        id: 1
    }));
};


export const checkAuthorization = (login: string, password: string) => (dispatch: Dispatch) => {
    dispatch(onLoading());

    request.request({
        url: AUTHORIZATION_URL,
        method: request.method.POST,
        useFormData: true,
        body: { login, password }
    })
        .then((response) => {
            if (response && response.status === 200) {
                return successAuthorization(dispatch);
            }

            return failureAuthorization(dispatch);
        })
        .catch(() => {
            failureAuthorization(dispatch);
        })
};

