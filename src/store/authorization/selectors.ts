import { createSelector } from "reselect";
import { StoreTypes } from "../store-types";

const getAuthorizationStore = (state: StoreTypes) => state.authorization;

export const getAuthorizationStatusSelector = createSelector(getAuthorizationStore,
    getAuthorizationStore => getAuthorizationStore.authorization);
