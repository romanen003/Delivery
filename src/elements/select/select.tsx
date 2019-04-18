import React, {Component} from 'react';
import classNames from 'classnames';
import './select.scss';

interface Props {
  multiple?: boolean,
  option: Array<string>,
  value?: Array<string> | string
};

export class Select extends Component<Props> {
  static defaultProps = {
    multiple: false,
    option: []
  };

  handleChange = (event: any) => {
    console.log('event', event.currentTarget.value);
  };


  render () {
    const {
      multiple,
      option,
      value
    } = this.props;
    const selectStyle= classNames('select');

    return (
      <select
        value={value}
        multiple={multiple}
        onChange={this.handleChange}
        className={selectStyle}
      >
        {option.map((item, index) => (
          <option
            key={index}
            value={item}
          >
            {item}
          </option>
        ))}
      </select>
    )
  }
}
