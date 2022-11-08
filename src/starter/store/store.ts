import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from './rootSaga';

import { authReducer } from 'base/store/Auth/reducer';
import { modalReducer } from 'base/store/Modal';
import { productReducer } from 'base/store/Product/reducer';
import { productsReducer } from 'base/store/Products/reducer';
import { registrationReducer } from 'base/store/Registration/reducer';
import { searchReducer } from 'base/store/Search/reducer';

const rootReducer = combineReducers({
  auth: authReducer,
  registration: registrationReducer,
  products: productsReducer,
  product: productReducer,
  search: searchReducer,
  modal: modalReducer,
});

const sagaMiddleware = createSagaMiddleware();

// @ts-ignore
const composeEnhancers = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ as typeof compose) || compose;

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const configureStore = (preloadedState: any) =>
  createStore(rootReducer, preloadedState, composeEnhancers(applyMiddleware(sagaMiddleware)));

const store = configureStore({});

sagaMiddleware.run(rootSaga); // ----must before store

export default store;
