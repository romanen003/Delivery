import {Authorization} from "./authorization";
import {registerModal} from "../register-modals";

export const AUTHORIZATION_URL = '/api/get-users';

export const AUTHORIZATION = 'Authorization';

export const PLACEHOLDERS = {
    LOGIN: 'ENTER LOGIN',
    PASSWORD: 'ENTER PASSWORD',
    SUBMIT: 'AUTHORIZATION'
};

export const AUTHORIZATION_MODAL_CONFIG = {
    name: 'AUTHORIZATION',
    Component: Authorization,
    view: "RIGHT",
};

registerModal(AUTHORIZATION_MODAL_CONFIG);
