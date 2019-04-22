import {authorizationState} from "./authorization/reducer";

export interface StoreTypes {
    authorization: authorizationState,
    modals: Array<string>
}
