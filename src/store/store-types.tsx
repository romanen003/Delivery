import {authorizationState} from "./authorization/reducer";
import {LoadingState} from "./loading/reducer";
import {Notification} from './notification/reducer';

export interface StoreTypes {
    authorization: authorizationState,
    modals: Array<string>,
    loading: LoadingState,
    notification: Array<Notification>
}
