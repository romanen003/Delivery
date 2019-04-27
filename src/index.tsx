import React from 'react';
import ReactDOM from 'react-dom';
import {ConnectedRouter} from "connected-react-router";
import {Provider} from 'react-redux';
import {App} from './App';
import {history} from './store/router/history';
import {store} from "./store";


const ROOT = 'root';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App/>
        </ConnectedRouter>
    </Provider>,
    document.getElementById(ROOT)
);

