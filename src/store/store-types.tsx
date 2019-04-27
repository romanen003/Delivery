import {authorizationState} from "./authorization/reducer";
import {LoadingState} from "./loading/reducer";

export interface StoreTypes {
    authorization: authorizationState,
    modals: Array<string>,
    loading: LoadingState
}
