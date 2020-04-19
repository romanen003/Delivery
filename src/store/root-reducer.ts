import { combineReducers } from "redux";
import { AuthorizationReducer } from "./authorization/reducer";
import { ModalsReducer } from "./modals/reducer";
import { LoadingReducer } from "./loading/reducer";
import { NotificationReducer } from './notification/reducer';
import { RestaurantReducer } from "./restaurant/reducer";
import { DictionariesReducer } from "./dictionaries/reducer";


export const rootReducer = combineReducers({
    authorization: AuthorizationReducer,
    modals: ModalsReducer,
    loading: LoadingReducer,
    notification: NotificationReducer,
    restaurant: RestaurantReducer,
    dictionaries: DictionariesReducer
});
