import {Authorization} from "./authorization";
import {registerModal} from "../modals-root/register-modals";

export const AUTHORIZATION_URL = '/api/auth/check-auth';

export const AUTHORIZATION = 'Authorization';

export const PLACEHOLDERS = {
    LOGIN: 'enter login',
    PASSWORD: 'enter password',
    SUBMIT: 'AUTHORIZATION'
};

export const AUTHORIZATION_MODAL_NAME = 'AUTHORIZATION';

export const AUTHORIZATION_MODAL_CONFIG = {
    name: AUTHORIZATION_MODAL_NAME,
    Component: Authorization,
    view: "CENTER",
};

registerModal(AUTHORIZATION_MODAL_CONFIG);
