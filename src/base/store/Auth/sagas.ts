import { call, put, takeLeading } from 'redux-saga/effects';

import * as authTypes from './constants';

import { productsAPI } from 'api/api';
import {
  authErrorAction,
  authSuccessAction,
  loginErrorAction,
  loginSuccessAction,
} from 'base/store/Auth/actions';
import { PostAuthRegisterResp } from 'base/types/provider/auth';

// -------------------------------- login

function* loginSaga(payload: any) {
  try {
    const resp: PostAuthRegisterResp = yield call(productsAPI.login, payload.payload);

    if (!resp || resp.error) {
      console.log('!resp.success || resp.error');
      throw new Error('email or password is invalid');
    }

    yield put(loginSuccessAction());
    // @ts-ignore
    if (resp.data.accessToken) {
      // @ts-ignore
      localStorage.setItem('token', resp.data.accessToken);
    }
  } catch (err: any) {
    yield put(loginErrorAction({ error: err.message }));
  }
}

// -------------------------------- auth

function* authSaga() {
  try {
    const resp: PostAuthRegisterResp = yield call(productsAPI.checkAuth);

    if (!resp || resp.error) {
      throw new Error('email or password is invalid');
    }

    yield put(authSuccessAction());
    // @ts-ignore
    if (resp.data.accessToken) {
      // @ts-ignore
      localStorage.setItem('token', resp.data.accessToken);
    }
  } catch (err: any) {
    yield put(authErrorAction({ error: err.message }));
  }
}

// -------------------------------- logout

function* logoutSaga() {
  try {
    console.log('logoutSaga =');
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const resp = yield call(productsAPI.logout);

    localStorage.removeItem('token');
  } catch (err: any) {
    console.log(err);
  }
}

export function* authWatcher() {
  yield takeLeading(authTypes.BASE_LOGIN_REQUEST, loginSaga);
  yield takeLeading(authTypes.BASE_AUTH_REQUEST, authSaga);
  yield takeLeading(authTypes.BASE_LOGOUT_REQUEST, logoutSaga);
}
