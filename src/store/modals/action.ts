import {MODAL_ACTION} from "./constants";

export const showModal = (payload: string) => ({
    type: MODAL_ACTION.SHOW,
    payload
});

export const closeModal = () => ({
    type: MODAL_ACTION.CLOSE
});
