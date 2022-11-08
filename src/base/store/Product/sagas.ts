import { call, put, takeLeading } from 'redux-saga/effects';

import { productsAPI } from '../../../api/api';
import { setAppIsLoadingAction } from '../Products/actions';

import { setProductAction } from './actions';
import * as productTypes from './constants';

import { GetProductResp } from 'base/types/provider/product';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function* getProductSaga({ payload }: any) {
  try {
    yield put(setAppIsLoadingAction(true));
    const resp: GetProductResp = yield call(productsAPI.getProduct, payload);

    yield put(setProductAction(resp.data));
    yield put(setAppIsLoadingAction(false));
  } catch (e: any) {
    console.log(e);
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function* productWatcher() {
  yield takeLeading(productTypes.BASE_GET_PRODUCT, getProductSaga);
}

// export default function* rootSaga() {
//   yield all([
//     fork(productWatcher),
//   ]);
//   }
