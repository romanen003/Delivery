import React, { Component, FocusEvent, ReactNode, RefObject } from 'react';
import classNames from 'classnames/bind';
import { BUTTONS_WITH_ICONS } from './button-icon';
import style from './button.scss';

const cn = classNames.bind(style);

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
    onClick?: (event: React.SyntheticEvent) => void,
    onBlur?: (event: FocusEvent) => void,
    buttonRef?: RefObject<HTMLButtonElement>
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
        type: 'button'
    };

    handleOnClick = (event: React.SyntheticEvent) => {
        const { onClick } = this.props;

        event.stopPropagation();

        if (onClick){
            onClick(event);
        }
    };

    handleButtonBlur = (event: FocusEvent) => {
        const { onBlur } = this.props;

        if (onBlur){
            onBlur(event)
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
            icon,
            buttonRef
        } = this.props;
        const buttonClassMame = cn('btn', {
            'btn_edit': edit,
            'btn_confirm': confirm,
            'btn_close': close,
            'btn_delete': del,
            'btn_transfer': transfer,
            'btn_icon': icon,
            'btn_active': active
        });

        return (
            <button
                type={type}
                className={buttonClassMame}
                onClick={this.handleOnClick}
                onBlur={this.handleButtonBlur}
                disabled={disabled}
                ref={buttonRef}
            >
                {children}
            </button>
        );
    }
}
