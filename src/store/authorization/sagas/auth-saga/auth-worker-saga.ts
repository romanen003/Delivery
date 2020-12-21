import { put, call } from 'redux-saga/effects';
import { offLoading, onLoading } from '../../../loading/action';
import { request } from '../../../../utils/request';
import { AUTHORIZATION_URL } from '../../../../modules/authorization/constants';
import { setAuthorisation } from '../../action';
import { addNotification } from '../../../notification/action';
import { TYPES } from '../../../../elements/notification/constants';
import { closeModal } from '../../../modals/action';

export function* authWorkerSaga(action: any){
    try {
        yield put(onLoading());

        const response = yield call(() => request.request({
            url: AUTHORIZATION_URL,
            method: request.method.POST,
            useFormData: true,
            body: { login: action.payload.login, password:action.payload.password }
        }));

        if (response.status !== 200 ){
            throw new Error('Ошибка авторизации');
        }

        yield put(setAuthorisation(true));
        yield put(addNotification({
            type: TYPES.SUCCESS,
            title: 'Успешная авторизация',
            lifeTime: 5000,
            id: 1
        }));
        yield put(closeModal());

    } catch (error) {
        yield put(addNotification({
            type: TYPES.ERROR,
            title: 'Ошибка авторизации',
            description: error.message,
            lifeTime: 5000,
            id: 1
        }));
    } finally {
        yield put(offLoading());
    }
}