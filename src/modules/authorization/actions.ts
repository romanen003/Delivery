import {Dispatch} from "redux";
import {push} from "connected-react-router";
import {
    closeModal,
    offLoading,
    onLoading,
    setAuthorisation,
    addNotification
} from "../../store";
import {AUTHORIZATION_URL} from "./constants";
import {TYPES} from "../../elements/notification/constants";

const successAuthorization = () => (dispatch: Dispatch) => {
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

const failureAuthorization = () => (dispatch: Dispatch) => {
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
    fetch(AUTHORIZATION_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            login,
            password
        })

    })
        .then(response => {
            if (response.status === 200) {
                successAuthorization()(dispatch);
                return dispatch(push('/my-account'));
            }

            failureAuthorization()(dispatch);
        })
        .catch(() => {
            failureAuthorization()(dispatch);
        })

};

