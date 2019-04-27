import React, {Component, Fragment} from 'react';
import {Route, Switch} from "react-router";
import {Home, MyAccountPage} from './layouts';
import {LoadingRoot, ModalRoot} from "./components";

const test = () => (<div>test</div>);

export class App extends Component {
    render () {
        return (
            <Fragment>
                <Switch>
                    <Route exact path='/' component={Home} />
                    <Route exact path='/my-account' component={MyAccountPage} />
                </Switch>
                <ModalRoot />
                <LoadingRoot />
            </Fragment>
        );
    }
}
