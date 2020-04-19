import React, { Component } from 'react'
import classNames from 'classnames';
import './input.scss';
import { InputWithClear } from './input-with-clear/input-with-clear'
import { InputPassword } from './input-password';

export interface InputProps {
    type?: string,
    disabled?: boolean,
    readOnly?: boolean,
    placeholder?: string,
    value?: string,
    clear?: boolean,
    onChange?: (value: string) => void,
    onFocus?: (event: React.SyntheticEvent) => void,
    onBlur?: (event: React.SyntheticEvent) => void,
    onMouseEnter?: (event: React.SyntheticEvent) => void,
    onMouseLeave?: (event: React.SyntheticEvent) => void
}


export class Input extends Component<InputProps> {
    handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = event.currentTarget.value;
        const {
            onChange = () => {}
        } = this.props;

        onChange(newValue)
    };

    static Clear = InputWithClear;
    static Password = InputPassword;

    render () {
        const {
            type,
            disabled,
            readOnly,
            placeholder,
            value,
            onFocus,
            onBlur,
            onMouseEnter,
            onMouseLeave,
            clear
        } = this.props;
        const CssStyle = classNames('input', {
            'input-clear': clear
        });

        return (
            <input
                type={type}
                disabled={disabled}
                readOnly={readOnly}
                placeholder={placeholder}
                value={value}
                onChange={this.handleChange}
                onFocus={onFocus}
                onBlur={onBlur}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
                className={CssStyle}
            />
        )
    }
}
