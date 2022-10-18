import { call, put, takeLeading, all, fork } from 'redux-saga/effects';
import * as productsTypes from '../../store/Products/constants';

import {getProductsAction, setAppIsLoadingAction, setProductsAction} from "./actions";
import {productsAPI} from "../../../api/api";
import {GetProductsResp} from "../../types/provider/products";


export function* getProductsSaga() {
  try {
    yield put(setAppIsLoadingAction(true));
    const resp: GetProductsResp = yield call(productsAPI.getProducts);
    yield put(setProductsAction(resp.data))
    yield put(setAppIsLoadingAction(false));
  }
  catch (e: any) {
    console.log(e)
  }
}

export function* productsWatcher() {
  yield takeLeading(productsTypes.BASE_GET_PRODUCTS, getProductsSaga);
}

// export default function* rootSaga() {
//   yield all([
//     fork(productsWatcher),
//   ]);
//   }