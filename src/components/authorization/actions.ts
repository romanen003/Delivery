import {Dispatch} from "redux";
import {push} from "connected-react-router";
import {
    closeModal,
    offLoading,
    onLoading,
    setAuthorisation
} from "../../store";
import {AUTHORIZATION_URL} from "./constants";



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
                dispatch(setAuthorisation(true));
                dispatch(closeModal());
                dispatch(push('/my-account'));
            }
        })
        .catch(res => console.log(res))
        .then(() => dispatch(offLoading()))
};

