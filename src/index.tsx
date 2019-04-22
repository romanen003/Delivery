import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from "connected-react-router";
import {Route, Switch} from 'react-router'
import {Provider} from 'react-redux';
import {App} from './App';
import {ModalRoot} from "./components";
import {history} from './store/router/history';
import {store} from "./store";


const ROOT = 'root';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact path='/' component={App} />
            </Switch>
            <ModalRoot />
        </ConnectedRouter>
    </Provider>,
    document.getElementById(ROOT)
);

