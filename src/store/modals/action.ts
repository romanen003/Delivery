import {MODAL_ACTION} from "./constants";
import {ReactNode} from "react";

interface showModalProps {
    component: ReactNode,
    config?: {[key: string]: any}
}

export const showModal = (payload: showModalProps) => ({
    type: MODAL_ACTION.SHOW,
    payload
});

export const closeModal = () => ({
    type: MODAL_ACTION.CLOSE
});
