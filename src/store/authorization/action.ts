import { AUTHORIZATION, AUTH_CHECK_ACTION_SAGA } from "./constants";

export const setAuthorisation = (payload: boolean) => ({
    type: AUTHORIZATION,
    payload
});

export const authCheckActionSaga = (payload: {login: string, password: string}) => ({
    type: AUTH_CHECK_ACTION_SAGA,
    payload
})