import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./root-reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import createSagaMiddleware from 'redux-saga'
import { authWatcherSaga } from "./authorization/sagas";
import { getRestaurantsWatcherSaga } from "./restaurant/sagas";
import { batchDispatchMiddleware } from "redux-batched-actions";

const sagaMiddleware = createSagaMiddleware();
export const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(sagaMiddleware, batchDispatchMiddleware)));


sagaMiddleware.run(authWatcherSaga);
sagaMiddleware.run(getRestaurantsWatcherSaga);
