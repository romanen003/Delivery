import { takeEvery } from 'redux-saga/effects';
import { GET_RESTAURANTS_ACTION_SAGA } from '../../constants';
import { getRestaurantsWorkerSaga } from './get-restaurants-worker-sagas';

export function* getRestaurantsWatcherSaga(){
    yield takeEvery(GET_RESTAURANTS_ACTION_SAGA, getRestaurantsWorkerSaga)
}