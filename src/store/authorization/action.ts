import { AUTHORIZATION } from "./constants";

export const setAuthorisation = (payload: boolean) => ({
    type: AUTHORIZATION,
    payload
});
