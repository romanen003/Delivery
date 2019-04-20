import React, {Component, Fragment} from 'react';
import classNames from "classnames";
import {connect} from "react-redux";
import {StoreTypes} from "../../store/store-types";
import {closeModal} from "../../store";
import './modal-root.scss';
import {Modal} from "../../store/modals/reducer";

interface Props {
    modals?: Array<Modal>,
    closeModal? : () => void
}

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

    renderModal = (modal: Modal, index: number) => {
        const classOverlay = `overlay`;
        const overlayZIndex = {zIndex: ++index};
        const {Component, config} = modal;

        return (
            <div
                className={classNames(classOverlay)}
                onClick={this.handleCloseModal}
                style={overlayZIndex}
            >
                <div
                    className={classNames('modal-wrapper') }
                    onClick={this.handleModalClick}
                >
                    <Component {...config} />
                </div>
            </div>
        );
    };

    render() {
        const {
            modals = []
        } = this.props;

        return (
            <Fragment>
            {
                modals.length
                ? modals.map((modal, index) => (this.renderModal(modal, index)))
                : null
            }
            </Fragment>
        );
    }
}
