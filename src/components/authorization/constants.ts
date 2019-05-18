import {Authorization} from "./authorization";
import {registerModal} from "../modals-root/register-modals";

export const AUTHORIZATION_URL = '/api/check-authorize';

export const AUTHORIZATION = 'Authorization';

export const PLACEHOLDERS = {
    LOGIN: 'ENTER LOGIN',
    PASSWORD: 'ENTER PASSWORD',
    SUBMIT: 'AUTHORIZATION'
};

export const AUTHORIZATION_MODAL_NAME = 'AUTHORIZATION';

export const AUTHORIZATION_MODAL_CONFIG = {
    name: AUTHORIZATION_MODAL_NAME,
    Component: Authorization,
    view: "RIGHT",
};

registerModal(AUTHORIZATION_MODAL_CONFIG);
