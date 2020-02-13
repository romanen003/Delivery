import {AnyAction} from "redux";
import {DICTIONARIES_FETCH_FAIL, DICTIONARIES_FETCH_SUCCESS} from "./constants";

interface DictionariesType {
    id: number,
    nameEn: string,
    nameRu: string
}

export interface dictionariesState {
    loading: boolean,
    error: Array<string>,
    data: {
        cities: Array<DictionariesType>,
        typesFood: Array<DictionariesType>
    }
}

const initialState: dictionariesState = {
    loading: false,
    error: [],
    data: {
        cities: [],
        typesFood: []
    }
};

export const DictionariesReducer = (state = initialState, {type, payload}: AnyAction) => {
    switch (type) {
        case DICTIONARIES_FETCH_FAIL:
            return {
                ...state,
                error: payload
            };
        case DICTIONARIES_FETCH_SUCCESS:
            return {
                ...state,
                data: payload
            };
        default:
            return state;
    }
};
