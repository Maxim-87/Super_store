import { all, fork } from 'redux-saga/effects';

import { productWatcher } from 'base/store/Product/sagas';
import { productsWatcher } from 'base/store/Products/sagas';
import { registrationWatcher } from 'base/store/Registration/sagas';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export default function* rootSaga() {
  yield all([fork(registrationWatcher), fork(productWatcher), fork(productsWatcher)]);
}
