import {createSelector} from "reselect";
import {StoreTypes} from "../store-types";

const getLoadingFromStore = (store: StoreTypes) => store.loading;

export const getLoadingStatus = createSelector(
    getLoadingFromStore,
        getLoadingStore => getLoadingStore.loading
);
