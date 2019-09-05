import {
    DOWNLOAD_STATUS,
    SET_FILTERS,
    SET_DATA,
    SET_PAGINATION
} from './constants';

export const setFilters = (payload: {[key: string]: any}) => ({
    type: SET_FILTERS,
    payload
});

export const setData = (payload: {[key: string]: any}) => ({
    type: SET_DATA,
    payload
});

export const setPagination = (payload: {[key: string]: any}) => ({
    type: SET_PAGINATION,
    payload
});

export const downloadStatus = (payload: boolean) => ({
    type: DOWNLOAD_STATUS,
    payload
});
