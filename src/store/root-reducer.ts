import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router'
import {AuthorizationReducer} from "./authorization/reducer";
import {ModalsReducer} from "./modals/reducer";
import {history} from './router/history';
import {LoadingReducer} from "./loading/reducer";

export const rootReducer = combineReducers({
    authorization: AuthorizationReducer,
    modals: ModalsReducer,
    router: connectRouter(history),
    loading: LoadingReducer
});
