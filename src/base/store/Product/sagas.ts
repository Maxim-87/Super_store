import { call, put, takeLeading } from 'redux-saga/effects';
import * as productTypes from '../../store/Product/constants';

import {productsAPI} from "../../../api/api";
import {setAppIsLoadingAction} from "../Products/actions";
import {setProductAction} from "./actions";
import {GetProductResp} from "../../types/provider/product";


export function* getProductSaga({payload}: any) {
  try {
    yield put(setAppIsLoadingAction(true));
    const resp: GetProductResp = yield call(productsAPI.getProduct, payload);
    yield put(setProductAction(resp.data))
    yield put(setAppIsLoadingAction(false));
  }
  catch (e: any) {
    console.log(e)
  }
}

export function* productWatcher() {
  yield takeLeading(productTypes.BASE_GET_PRODUCT, getProductSaga);
}

// export default function* rootSaga() {
//   yield all([
//     fork(productWatcher),
//   ]);
//   }