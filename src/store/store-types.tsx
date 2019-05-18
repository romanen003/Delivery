import {authorizationState} from "./authorization/reducer";
import {LoadingState} from "./loading/reducer";
import {NotificationType} from './notification/reducer';

export interface StoreTypes {
    authorization: authorizationState,
    modals: Array<string>,
    loading: LoadingState,
    notification: Array<NotificationType>
}
