import {applyMiddleware, createStore} from "redux";
import {rootReducer} from "./root-reducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";
import {routerMiddleware} from "connected-react-router";
import {history} from './router/history';

export const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(
            routerMiddleware(history),
            thunk
)));
