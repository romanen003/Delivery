import React, {Component, Fragment} from 'react'
import './App.scss';
import {Input, Select} from './elements';

export class App extends Component {
  state = {
    value: ''
  }

  handleClear = (value: string) => {
    this.setState(() => ({value}))
  }

  componentDidMount() {
    fetch('/api/get-users')
      .then(res => res.json())
      .then(res => console.log('res', res));
  }

  render() {
    return (
      <Fragment>
        <Input.Clear
          onChange={this.handleClear}
          value={this.state.value}
        />
        <Select
          option={['1','2','3']}
          value={['1','2']}
          multiple
        />
      </Fragment>

    );
  }
}
