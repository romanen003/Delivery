import {createSelector} from "reselect";
import {StoreTypes} from "../store-types";

const getModalsFromStore = (store: StoreTypes) => store.modals;

export const getModals = createSelector(getModalsFromStore, (modalState) => modalState);
