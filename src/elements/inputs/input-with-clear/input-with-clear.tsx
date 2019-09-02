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
    state = {
        focus: false
    };

    handleClear = () => {
        const {
            onChange = () => {},
            onClear = () => {}
        } = this.props;
        onChange(DEFAULT_VALUE);
        onClear();
    };

    handleFocus = () => this.setState({focus: true});

    handleBlur = () => this.setState({focus: false});

    render () {
        const wrapperStyle = classNames("input-wrapper");
        const {disabled, value} = this.props;
        const {focus} = this.state;

        return (
            <div className={wrapperStyle}>
                <Input
                    onMouseEnter={this.handleFocus}
                    onMouseLeave={this.handleBlur}
                    clear
                    {...this.props}
                />
                <div className={classNames('input-wrapper__button')}>
                    {
                        !disabled && value && focus &&
                        <Button.Clear
                            onClick={this.handleClear}
                        />
                    }
                </div>
            </div>
        )
    }
}
