import React from 'react';
import {Route} from "react-router";
import {Home, TestPage, MainPageConnected} from './layouts';
import {LoadingRoot, ModalRoot, NotificationRoot} from "./modules";

export const App = () => (
    <>
        <Route exact path='/' component={MainPageConnected} />
        <Route exact path='/restaurant' component={Home} />
        <Route exact path='/my-account' component={Home} />
        <Route exact path='/test' component={TestPage} />
        <ModalRoot />
        <LoadingRoot />
        <NotificationRoot />
    </>
);
