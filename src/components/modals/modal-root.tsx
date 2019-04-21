import React, {Component, Fragment} from 'react';
import classNames from "classnames";
import {connect} from "react-redux";
import {StoreTypes} from "../../store/store-types";
import {closeModal} from "../../store";
import './modal-root.scss';
import {Modal} from "../../store/modals/reducer";
import {registeredModals} from "./register-modals";
import {ModalConfig} from "./register-modals";

interface Props {
    modals?: Array<Modal>,
    closeModal? : () => void
}

export const VIEW = {
    LEFT: 'LEFT',
    CENTER: 'CENTER'
};

@(connect((
    store: StoreTypes
) => ({
    modals: store.modals
}), {
    closeModal
}) as any)
export class ModalRoot extends Component<Props> {
    handleCloseModal = () => {
        const {
            closeModal = () => {}
        } = this.props;

        closeModal();
    };

    handleModalClick = (event: React.SyntheticEvent) => {
        event.stopPropagation();
    };

    renderModal = (modal: ModalConfig, index: number) => {
        const classOverlay = `overlay`;
        const overlayZIndex = {zIndex: ++index};
        const {Component, name, config, view} = modal;
        const modalPositionStyle = classNames({
            'modal-wrapper-left': view === VIEW.LEFT,
            'modal-wrapper-center': view === VIEW.CENTER,
        });

        return (
            <div
                className={classNames(classOverlay)}
                onClick={this.handleCloseModal}
                style={overlayZIndex}
            >
                <div
                    className={modalPositionStyle}
                    onClick={this.handleModalClick}
                >
                    <Component {...config} onClose={this.handleModalClick} />
                </div>
            </div>
        );
    };

    render() {
        const {
            modals = []
        } = this.props;
        const modalsArray = registeredModals.filter((item) => {
           // @ts-ignore
            return modals.includes(item.name)
        });

        return (
            <Fragment>
            {
                modalsArray.length
                ? modalsArray.map((modal, index) => (this.renderModal(modal, index)))
                : null
            }
            </Fragment>
        );
    }
}
