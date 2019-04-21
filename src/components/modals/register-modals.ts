import {modalTest} from "../header/header";

export interface ModalConfig {
    name: string,
    Component: any,
    config?: {[key: string]: any},
    view: string
}

export const registeredModals: ModalConfig[] = [
    modalTest
];
