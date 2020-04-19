import { createSelector } from "reselect";
import { StoreTypes } from "../store-types";

const modalsRootSelector = (store: StoreTypes) => store.modals;

export const getModalsSelector = createSelector(modalsRootSelector,
    modalState => modalState);
