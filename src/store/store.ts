import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import { authWatcherSaga } from "./authorization/sagas";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware)));


sagaMiddleware.run(authWatcherSaga);
