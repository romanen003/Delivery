import React from 'react';
import { Route } from "react-router";
import { MainPageConnected } from './layouts';
import { LayoutHome } from "./elements";
import { TestView } from "./layouts/test-page";
import {
    Header,
    LoadingRoot,
    ModalRoot,
    NotificationRoot,
    RestaurantContainer
} from "./modules";

export const App = () => (
    <>
        <Route exact path='/' component={MainPageConnected} />
        <Route exact path={[ '/restaurant', '/my-account', '/test' ]} render={() => (
            <LayoutHome
                headerView={<Header />}
                contentView={
                    <>
                        <Route exact path={[ '/restaurant', '/my-account' ]} component={RestaurantContainer} />
                        <Route exact path='/test' component={TestView} />
                    </>
                }
            />
        )} />
        <ModalRoot />
        <LoadingRoot />
        <NotificationRoot />
    </>
);
