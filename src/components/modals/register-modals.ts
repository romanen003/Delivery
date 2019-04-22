export interface ModalConfig {
    name: string,
    Component: any,
    config?: {[key: string]: any},
    view: string
}

export const registeredModals: {[key: string]: ModalConfig} = {};

export const registerModal = (Modal: ModalConfig): any => {
    registeredModals[Modal.name] =  Modal
};

export const getModal = (name: string): any => registeredModals[name];
