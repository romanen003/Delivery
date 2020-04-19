import React, { Component, Fragment } from 'react';
import classNames from "classnames";
import { connect } from "react-redux";
import { StoreTypes } from "../../store/store-types";
import { closeModal } from "../../store";
import { ModalConfig, getModal } from "./register-modals";
import { VIEW } from "./constants";
import { Overlay } from "../../elements";
import { getModalsSelector } from '../../store/modals/selectors';
import './modal-root.scss';

interface Props {
    modals?: Array<string>,
    closeModal? : () => void
}

class ModalRootContainer extends Component<Props> {
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
        const overlayZIndex = { zIndex: ++index };
        const { Component, config, view } = modal;
        const modalPositionStyle = classNames('modal-wrapper', {
            'modal-wrapper-right': view === VIEW.RIGHT,
            'modal-wrapper-center': view === VIEW.CENTER
        });

        return (
            <Overlay
                onClick={this.handleCloseModal}
                style={overlayZIndex}
                key={index}
            >
                <div
                    className={modalPositionStyle}
                    onClick={this.handleModalClick}
                >
                    <Component {...config} key={index} />
                </div>
            </Overlay>
        );
    };

    render() {
        const {
            modals = []
        } = this.props;
        const modalsArray = modals.map((value: string): ModalConfig => getModal(value));

        return (
            <Fragment>
                {
                    modalsArray.length
                        ? modalsArray.map((modal: ModalConfig, index: number) => (this.renderModal(modal, index)))
                        : null
                }
            </Fragment>
        );
    }
}

export const ModalRoot = connect((store: StoreTypes) => ({
    modals: getModalsSelector(store)
}), {
    closeModal
})(ModalRootContainer);