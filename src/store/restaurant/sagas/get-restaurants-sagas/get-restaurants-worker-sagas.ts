import { call, put } from 'redux-saga/effects';
import { offLoading, onLoading } from '../../../loading/action';
import { setData } from '../../action';
import { addNotification } from '../../../notification/action';
import { TYPES } from '../../../../elements/notification/constants';
import { getRestaurantsGetRequest } from '../../../../api/requests';
import { batchActions } from 'redux-batched-actions';


export function* getRestaurantsWorkerSaga(){
    try {
        yield put(batchActions([ onLoading(), setData([]) ]));

        const response = yield call(getRestaurantsGetRequest());
        const { data } = yield response.json();

        if (response.status !== 200) {
            throw new Error('Не удалось получилось список ресторанов');
        }

        yield put(setData(data));
    }catch (error) {
        yield put(addNotification({
            type: TYPES.ERROR,
            title: 'Ошибка при получении данных',
            description: error.message,
            lifeTime: 5000,
            id: 1
        }));
    }finally {
        yield put(offLoading());
    }
}