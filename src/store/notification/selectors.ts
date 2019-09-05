import {createSelector} from "reselect";
import {StoreTypes} from "../store-types";

const notificationRootSelector = (state: StoreTypes) => state.notification;

export const notificationSelector = createSelector(notificationRootSelector,
    (state) => state
);
