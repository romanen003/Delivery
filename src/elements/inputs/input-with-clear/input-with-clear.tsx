import React, {Component} from 'react'
import classNames from 'classnames';
import {Input, Button} from '../../';
import {InputProps} from '../input';
import './input-with-clear.scss';

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
        const {disabled, value} = this.props;

        return (
            <div className={classNames("input-wrapper")}>
                <Input clear{...this.props}/>
                <div className={classNames('input-wrapper__button')}>
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
