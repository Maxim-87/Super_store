/* eslint-disable */
import { call, put, takeLeading } from 'redux-saga/effects';

import * as registrationTypes from './constants';

import { RegisterActionType } from 'base/store/Registration/types';
import { registerErrorAction, registerSuccessAction } from 'base/store/Registration/actions';

function* registerSaga({ payload }: RegisterActionType) {
  try {
    const { firstName, email, password } = payload;

    // const resp: any = yield call(apiRequest, 'postAuthRegister', {
    //   body: {
    //     firstName,
    //     email,
    //     password,
    //   },
    // });

    // if (!resp.success || resp.error) {
    //   switch (resp.error) {
    //     case 'EMAIL_NOT_FOUND':
    //       throw new Error('email not found');
    //     case 'CODE_NOT_FOUND':
    //       throw new Error('code not found');
    //     default:
    //       throw new Error(resp.error || 'Unknown error');
    //   }
    // }
    yield put(registerSuccessAction());
  } catch (err: any) {
    yield put(registerErrorAction({ error: err.message }));
  }
}

export function* registrationWatcher() {
  yield takeLeading(registrationTypes.BASE_REGISTER_REQUEST, registerSaga);
}
