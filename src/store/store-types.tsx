import {authorizationState} from "./authorization/reducer";
import {LoadingState} from "./loading/reducer";
import {NotificationType} from './notification/reducer';
import {RestaurantStoreType} from "./restaurant/reducer";

export interface StoreTypes {
    authorization: authorizationState,
    modals: Array<string>,
    loading: LoadingState,
    notification: Array<NotificationType>,
    restaurant: RestaurantStoreType,
    router: {[key: string]: any}
}
