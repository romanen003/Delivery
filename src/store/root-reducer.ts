import {combineReducers} from "redux";
import {AuthorizationReducer} from "./authorization/reducer";
import {ModalsReducer} from "./modals/reducer";

export const rootReducer = combineReducers({
    authorization: AuthorizationReducer,
    modals: ModalsReducer
});
