import React, {Component, Fragment} from 'react';
import {Route} from "react-router";
import {Home} from './layouts';
import {LoadingRoot, ModalRoot, NotificationRoot} from "./modules";

export class App extends Component {
    render () {
        return (
            <Fragment>
                <Route exact path='/' component={Home} />
                <Route exact path='/my-account' component={Home} />
                <ModalRoot />
                <LoadingRoot />
                <NotificationRoot />
            </Fragment>
        );
    }
}
