import { takeEvery } from 'redux-saga/effects';
import { authWorkerSaga } from './auth-worker-saga';
import { AUTH_CHECK_ACTION_SAGA } from '../../constants';

export function* authWatcherSaga() {
    yield takeEvery(AUTH_CHECK_ACTION_SAGA, authWorkerSaga);
}