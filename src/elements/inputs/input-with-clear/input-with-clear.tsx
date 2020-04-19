import React, { Component } from 'react'
import classNames from 'classnames/bind';
import { Input, Button } from '../../';
import { InputProps } from '../input';
import style from './input-with-clear.scss';

const cn = classNames.bind(style);

const DEFAULT_VALUE = '';

export interface InputWithClearProps extends InputProps {
    onClear?: () => void,
    value?: string
}

export class InputWithClear extends Component<InputWithClearProps, {focus: boolean}> {
    handleClear = () => {
        const {
            onChange = () => {},
            onClear = () => {}
        } = this.props;

        onChange(DEFAULT_VALUE);
        onClear();
    };

    render () {
        const { disabled, value } = this.props;

        return (
            <div className={cn("input-wrapper")}>
                <Input clear{...this.props}/>
                <div className={cn('input-wrapper__button')}>
                    {
                        !disabled && value &&
                        <Button.Clear
                            onClick={this.handleClear}
                        />
                    }
                </div>
            </div>
        )
    }
}
