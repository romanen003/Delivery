import React, {Component, Fragment} from 'react';
import {Route} from "react-router";
import {Home, MyAccountPage} from './layouts';
import {
    LoadingRoot,
    ModalRoot,
    Header,
    NotificationRoot
} from "./components";

export class App extends Component {
    render () {
        return (
            <Fragment>
                <Header />
                <Route exact path='/' component={Home} />
                <Route exact path='/my-account' component={MyAccountPage} />
                <ModalRoot />
                <LoadingRoot />
                <NotificationRoot />
            </Fragment>
        );
    }
}
