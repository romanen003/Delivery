import { createSelector } from "reselect";
import { StoreTypes } from "../store-types";

const RestaurantRootSelector = (state: StoreTypes) => state.restaurant;

export const RestaurantDataSelector = createSelector(RestaurantRootSelector,
    state => state.data);
