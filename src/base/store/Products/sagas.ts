import { call, put, takeLeading, all, fork } from 'redux-saga/effects';
import * as productsTypes from '../../store/Products/constants';

import {getProductsAction, setAppIsLoadingAction, setProductsAction} from "./actions";
import {productsAPI} from "../../../api/api";


export function* getProductsSaga() {
  console.log('getProductsSaga')
  try {
    console.log('getProductsSaga')
    yield put(setAppIsLoadingAction(true));
    const {products} = yield call(productsAPI.getProducts)
    console.log('PRODUCTS SAGA =', products)
    yield put(setProductsAction(products))
    yield put(setAppIsLoadingAction(false));
  }
  catch (e: any) {
    console.log(e)
  }
}

export function* productsWatcher() {
  yield takeLeading(productsTypes.BASE_GET_PRODUCTS, getProductsSaga);
}

export default function* rootSaga() {
  yield all([
    fork(productsWatcher),
  ]);
  }