import { call, put } from 'redux-saga/effects';
import { offLoading, onLoading } from '../../../loading/action';
import { setData, showError } from '../../action';
import { request } from '../../../../utils/request';
import { addNotification } from '../../../notification/action';
import { TYPES } from '../../../../elements/notification/constants';

const RESTAURANT_URL = '/api/restaurant';

export function* getRestaurantsWorkerSaga(){
    try {
        yield put(onLoading());
        yield put(setData([]));

        const response = yield call(() => request.request({
            url: RESTAURANT_URL,
            method: request.method.GET
        }));
        const { data } = yield response.json();

        if (response.status !== 200) {
            throw new Error('Не удалось получилось список ресторанов');
        }

        yield put(setData(data));
    }catch (error) {
        yield put(showError(true));
        yield put(addNotification({
            type: TYPES.ERROR,
            title: 'Ошибка авторизации',
            description: error.message,
            lifeTime: 5000,
            id: 1
        }));
    }finally {
        yield put(offLoading());
    }
}