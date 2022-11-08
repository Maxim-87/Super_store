import { call, put, takeLeading } from 'redux-saga/effects';

import * as registrationTypes from './constants';

import { productsAPI } from 'api/api';
import { registerErrorAction, registerSuccessAction } from 'base/store/Registration/actions';
import { RegisterActionType } from 'base/store/Registration/types';
import { PostAuthRegisterResp } from 'base/types/provider/auth';

function* registerSaga({ payload }: RegisterActionType) {
  try {
    // const { email, password }: PostAuthRegisterReq = payload;

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    // @ts-ignore
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const resp: PostAuthRegisterResp = yield call(productsAPI.login, payload);

    yield put(registerSuccessAction());
  } catch (err: any) {
    yield put(registerErrorAction({ error: err.message }));
  }
}

export function* registrationWatcher() {
  yield takeLeading(registrationTypes.BASE_REGISTER_REQUEST, registerSaga);
}
