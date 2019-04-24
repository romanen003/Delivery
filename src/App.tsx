import React, {Component} from 'react';
import {Route, Switch} from "react-router";
import {Home} from './layouts';

const test = () => (<div>test</div>);

export class App extends Component {
    render () {
        return (
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/my-account' component={test} />
            </Switch>
        );
    }
}
