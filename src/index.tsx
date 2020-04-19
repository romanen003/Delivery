import React from 'react';
import ReactDOM from 'react-dom';
import { Switch, BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./store";
import { MainPageConnected } from "./layouts/main-page";
import { RestaurantContainer } from "./modules/restaurant-container/restaurant-container";
import { TestView } from "./layouts/test-page";
import { ModalRoot } from "./modules/modals-root/modal-root";
import { LoadingRoot } from "./modules/loading-root/loading-root";
import { NotificationRoot } from "./modules/notification-root/notification-root";

const ROOT = 'root';
const RootElement = document.getElementById(ROOT);

const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={MainPageConnected} />
                <Route exact path='/432424' component={MainPageConnected} />
                <Route exact path='/restaurant' component={RestaurantContainer} />
                <Route exact path='/test' component={TestView} />
                <Route component={TestView} />
            </Switch>
            <ModalRoot />
            <LoadingRoot />
            <NotificationRoot />
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(<App />, RootElement);

