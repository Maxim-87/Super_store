import { call, put, takeLeading } from 'redux-saga/effects';

import {
  createProductSuccessAction,
  deleteProductSuccessAction,
  setAppIsLoadingAction,
  setProductsAction,
} from './actions';
import * as productsTypes from './constants';

import { productsAPI } from 'api/api';
import { CreateProductResp, GetProductsResp } from 'base/types/provider/products';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function* getProductsSaga() {
  try {
    yield put(setAppIsLoadingAction(true));
    const resp: GetProductsResp = yield call(productsAPI.getProducts);

    yield put(setProductsAction(resp.data));
    yield put(setAppIsLoadingAction(false));
  } catch (e: any) {
    console.log(e);
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function* createProductSaga({ payload }: any) {
  try {
    const resp: CreateProductResp = yield call(productsAPI.createProduct, payload);

    yield put(createProductSuccessAction(resp.data));
  } catch (e: any) {
    console.log(e);
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function* deleteProductSaga({ id }: any) {
  try {
    yield call(productsAPI.deleteProduct, id);
    yield put(deleteProductSuccessAction(id));
  } catch (e: any) {
    console.log(e);
  }
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function* productsWatcher() {
  yield takeLeading(productsTypes.BASE_GET_PRODUCTS, getProductsSaga);
  yield takeLeading(productsTypes.BASE_CREATE_PRODUCT_REQUEST, createProductSaga);
  yield takeLeading(productsTypes.BASE_DELETE_PRODUCT_REQUEST, deleteProductSaga);
}
