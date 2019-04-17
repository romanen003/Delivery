import React, {Component, ReactNode} from 'react';
import classNames from 'classnames';
import {BUTTONS_WITH_ICONS} from "./button-icon";
import './button.scss';

export interface ButtonProps {
    type?: 'submit' | 'reset' | 'button',
    active?: boolean,
    edit?: boolean,
    confirm?: boolean,
    close?: boolean,
    del?: boolean,
    transfer?: boolean,
    disabled?: boolean,
    children?: string | ReactNode,
    icon?: boolean,
    onClick?: (event: React.SyntheticEvent) => void
}

const {
    EDIT,
    CONFIRM,
    CLOSE,
    DELETE,
    TRANSFER,
    ADD,
    CLEAR,
    LIST,
    TOP
} = BUTTONS_WITH_ICONS;


export class Button extends Component<ButtonProps> {
    static Edit = EDIT;
    static Confirm = CONFIRM;
    static Close = CLOSE;
    static Delete = DELETE;
    static Transfer = TRANSFER;
    static Add = ADD;
    static Clear = CLEAR;
    static List = LIST;
    static Top = TOP;

    static defaultProps = {
        type: 'button',
        onClick: () => {}
    };

    handleOnClick = (event: React.SyntheticEvent) => {
        event.stopPropagation();

        if (this.props.onClick){
            this.props.onClick(event)
        }
    };


    render () {
        const {
            type = 'button',
            active,
            edit,
            confirm,
            close,
            del,
            transfer,
            disabled,
            children,
            icon
        } = this.props;

        const buttonClassMame = classNames(
            'btn', {
                'btn_edit': edit,
                'btn_confirm': confirm,
                'btn_close': close,
                'btn_delete': del,
                'btn_transfer': transfer,
                'btn_icon': icon,
                'btn_active': active
            }
        );

        return (
            <button
                type={type}
                className={buttonClassMame}
                onClick={this.handleOnClick}
                disabled={disabled}
            >
                {children}
            </button>
        );
    };
}
