import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./store";
import { MainPage, TestView } from "./layouts";
import { LayoutHome } from './elements';
import {
    RestaurantContainer ,
    ModalRoot ,
    LoadingRoot ,
    NotificationRoot ,
    Header
} from "./modules";
import './style.scss';

const ROOT = 'root';
const RootElement = document.getElementById(ROOT);

const App: React.FunctionComponent = () => (
    <Provider store={store}>
        <BrowserRouter>
            <LayoutHome
                headerView={<Header />}
                contentView={
                    <Switch>
                        <Route exact path='/' component={MainPage} />
                        <Route exact path='/432424' component={MainPage} />
                        <Route exact path='/restaurant' component={RestaurantContainer} />
                        <Route exact path='/test' component={TestView} />
                    </Switch>
                }
            />
            <ModalRoot />
            <LoadingRoot />
            <NotificationRoot />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(<App />, RootElement);

