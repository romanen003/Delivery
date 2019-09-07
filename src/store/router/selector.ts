import {createSelector} from "reselect";
import {StoreTypes} from "../store-types";

const RouterSelector = (store: StoreTypes) => store.router;

export const RouterPathSelector = createSelector(RouterSelector,
    store => store.location.pathname
);
