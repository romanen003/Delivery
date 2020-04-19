import { createSelector } from "reselect";
import { StoreTypes } from "../store-types";

const loadingRootSelector = (store: StoreTypes) => store.loading;

export const getLoadingStatusSelector = createSelector(loadingRootSelector,
    getLoadingStore => getLoadingStore.loading);
