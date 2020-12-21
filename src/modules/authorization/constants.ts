import { Authorization } from "./authorization";
import { registerModal } from '../modals-root/register-modals';

export const AUTHORIZATION: string = 'Authorization';

export const PLACEHOLDERS: {[key: string]: string} = {
    LOGIN: 'Enter login',
    PASSWORD: 'Enter password',
    SUBMIT: 'Authorization'
};

export const AUTHORIZATION_MODAL_NAME: string = 'AUTHORIZATION';

export const AUTHORIZATION_MODAL_CONFIG = {
    name: AUTHORIZATION_MODAL_NAME,
    Component: Authorization,
    view: "CENTER"
};

registerModal(AUTHORIZATION_MODAL_CONFIG);
