import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from "redux-devtools-extension";
import {Provider} from 'react-redux';
import {App} from './App';
import {rootReducer} from './store/root-reducer';
import {ModalRoot} from "./components";

const ROOT = 'root';
const store = createStore(rootReducer, composeWithDevTools());


ReactDOM.render(
    <Provider store={store}>
        <App />
        <ModalRoot />
    </Provider>,
    document.getElementById(ROOT)
);

