import {combineReducers} from "redux";
import {connectRouter} from 'connected-react-router'
import {AuthorizationReducer} from "./authorization/reducer";
import {ModalsReducer} from "./modals/reducer";
import {history} from './router/history';
import {LoadingReducer} from "./loading/reducer";
import {NotificationReducer} from './notification/reducer';
import {RestaurantReducer} from "./restaurant/reducer";
import {DictionariesReducer} from "./dictionaries/reducer";


export const rootReducer = combineReducers({
    authorization: AuthorizationReducer,
    modals: ModalsReducer,
    // @ts-ignore
    router: connectRouter(history),
    loading: LoadingReducer,
    notification: NotificationReducer,
    restaurant: RestaurantReducer,
    dictionaries: DictionariesReducer
});
