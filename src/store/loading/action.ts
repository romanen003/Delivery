import {LOADING} from "./constants";

export const  onLoading = () => ({
    type: LOADING.ACTIVE
});

export const  offLoading = () => ({
    type: LOADING.NOT_ACTIVE
});
