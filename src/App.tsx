import React, {Component, Fragment} from 'react';
import {Input, Select} from './elements';
import {connect} from "react-redux";
import {setAuthorisation} from './store/authorization/action';

interface Props {
    setAuthorisation: (value: boolean) => void
}


// @ts-ignore
@connect((state) => ({
    state
}),{
    setAuthorisation
})
export class App extends Component<Props>{
  state = {
    value: ''
  };

  handleClear = (value: string): void => {
    this.setState(() => ({value}))
  };

  componentDidMount() {
    fetch('/api/get-users')
      .then(res => res.json())
      .then(res => this.props.setAuthorisation(true))
      .then(res => console.log('res', res));
  };

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
