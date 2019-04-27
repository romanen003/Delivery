import {createSelector} from "reselect";
import {StoreTypes} from "../store-types";

const getLoadingStore = (store: StoreTypes) => store.loading;

export const getLoadingStatus = createSelector(
    getLoadingStore,
        getLoadingStore => getLoadingStore.loading
);
