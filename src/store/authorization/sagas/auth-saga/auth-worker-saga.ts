import { put, call } from 'redux-saga/effects';
import { offLoading, onLoading } from '../../../loading/action';
import { setAuthorisation } from '../../action';
import { addNotification } from '../../../notification/action';
import { TYPES } from '../../../../elements/notification/constants';
import { closeModal } from '../../../modals/action';
import { authCheckGetRequest, AuthCheckGetRequestType } from '../../../../api/requests';
import { batchActions } from 'redux-batched-actions';

type PropsType = {
    type: string,
    payload: AuthCheckGetRequestType
};

export function* authWorkerSaga({ payload }: PropsType){
    try {
        yield put(onLoading());

        const response = yield call(authCheckGetRequest({
            login: payload.login,
            password: payload.password
        }));

        if (response.status !== 200 ){
            throw new Error('Ошибка авторизации');
        }

        yield put(batchActions([
            setAuthorisation(true),
            addNotification({
                type: TYPES.SUCCESS,
                title: 'Успешная авторизация',
                lifeTime: 5000,
                id: 1
            }),
            closeModal()
        ]));

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