import React, {Component} from 'react'
import classNames from 'classnames';
import {Input, Button} from '../../';
import {InputProps} from '../input';
import './input-with-clear.scss';

const DEFAULT_VALUE = '';

interface Props extends InputProps {
    onClear?: () => void,
    value?: string
}


export class InputWithClear extends Component<Props> {
    handleClear = () => {
        const {
            onChange = () => {},
            onClear = () => {}
        } = this.props;
        onChange(DEFAULT_VALUE);
        onClear();
    };

    render () {
        const wrapperStyle = classNames("input-wrapper");
        const {
            disabled,
            value
        } = this.props;

        return (
            <div className={wrapperStyle}>
                <Input
                    clear
                    {...this.props}
                />
                {!disabled && value &&
                    <Button.Clear
                    onClick={this.handleClear}
                    />
                }
            </div>
        )
    }
}
