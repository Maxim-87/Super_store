import { call, put, takeLeading } from 'redux-saga/effects';

import * as registrationTypes from './constants';

import { productsAPI } from 'api/api';
import { registerErrorAction, registerSuccessAction } from 'base/store/Registration/actions';
import { RegisterActionType } from 'base/store/Registration/types';
import { PostAuthRegisterResp } from 'base/types/provider/auth';

// -------------------------------- registration

function* registerSaga({ payload }: RegisterActionType) {
  try {
    console.log('registerSaga before');

    const resp: PostAuthRegisterResp = yield call(productsAPI.registration, payload);

    if (!resp || resp.error) {
      throw new Error('email or password is invalid');
    }

    yield put(registerSuccessAction());
  } catch (err: any) {
    yield put(registerErrorAction({ error: err.message }));
  }
}

export function* registrationWatcher() {
  yield takeLeading(registrationTypes.BASE_REGISTER_REQUEST, registerSaga);
}
