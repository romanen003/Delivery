import {closeModal, setAuthorisation} from "../../../store";
import {AUTHORIZATION_URL} from "./constants";
import {Dispatch} from "redux";


export const checkAuthorization = (login: string, password: string) => (dispatch: Dispatch) => {
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
                dispatch(closeModal())
            }
        })
        .catch(res => console.log(res));
};

