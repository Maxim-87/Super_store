import {all, fork} from "redux-saga/effects";
import {productWatcher} from "../../base/store/Product/sagas";
import {productsWatcher} from "../../base/store/Products/sagas";

export default function* rootSaga() {
  yield all([
    fork(productWatcher),
    fork(productsWatcher),
  ]);
}