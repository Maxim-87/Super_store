import { call, put, takeLeading } from 'redux-saga/effects';

import * as authTypes from './constants';

import { productsAPI } from 'api/api';
import { loginErrorAction, loginSuccessAction } from 'base/store/Auth/actions';
import { PostAuthRegisterResp } from 'base/types/provider/auth';

// -------------------------------- loginModal

function* loginSaga(payload: any) {
  try {
    const resp: PostAuthRegisterResp = yield call(productsAPI.login, payload.payload);

    if (!resp || resp.error) {
      console.log('!resp.success || resp.error');
      throw new Error('email or password is invalid');
    }

    yield put(loginSuccessAction());
  } catch (err: any) {
    yield put(loginErrorAction({ error: err.message }));
  }
}

export function* authWatcher() {
  yield takeLeading(authTypes.BASE_LOGIN_REQUEST, loginSaga);
}
