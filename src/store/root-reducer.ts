import {combineReducers} from "redux";
import {AuthorizationReducer} from "./authorization/reducer";

export const rootReducer = combineReducers({
    Authorization: AuthorizationReducer
});
