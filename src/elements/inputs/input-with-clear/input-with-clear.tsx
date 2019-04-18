import React, {Component} from 'react'
import classNames from 'classnames';
import {Input, Button} from '../../';
import {InputProps} from '../input';
import './input-with-clear.scss';

const DEFAULT_VALUE = '';

interface Props extends InputProps {
  onClear?: (value: string) => void
}


export class InputWithClear extends Component<Props> {
  handleClear = () => {
    const {onChange = () => {}} = this.props;
    onChange(DEFAULT_VALUE)
  }

  render () {
    const wrapperStyle = classNames("input-wrapper");

    return (
      <div className={wrapperStyle}>
        <Input
          clear
          {...this.props}
        />
        <Button.Clear
          onClick={this.handleClear}
        />
      </div>
    )
  }
}
