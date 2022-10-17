// import { applyMiddleware, combineReducers } from 'redux'
// // import thunkMiddleware, {ThunkAction} from 'redux-thunk'
// import {productsReducer} from "../../base/store/Products/products-reducer";
// import {ProductsActionsType} from "../../base/store/Products/types";
// import { legacy_createStore as createStore} from 'redux'
// import { productReducer } from 'base/store/Product/product-reducer';
// import {searchReducer} from "../../base/store/Search/reducer";
// import createSagaMiddleware from 'redux-saga';
// import rootSaga from "../../base/store/Products/sagas";
//
// const sagaMiddleware = createSagaMiddleware();
//
// const rootReducer = combineReducers({
//  products: productsReducer,
//  product: productReducer,
//  search: searchReducer,
// })
//
// const configureStore = (preloadedState: any) => createStore(
//   rootReducer,
//   preloadedState,
//   applyMiddleware(sagaMiddleware),
// );
// export const store = configureStore({});
//
// export type AppRootStateType = ReturnType<typeof rootReducer>
//
// export type RootActionsType = ProductsActionsType
//
// sagaMiddleware.run(rootSaga);  //----must before store
// // export type ThunkType = ThunkAction<void, AppRootStateType, unknown, RootActionsType>;
// // @ts-ignore
// window.store = store;

import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootSaga from "../../base/store/Products/sagas";
import {searchReducer} from "../../base/store/Search/reducer";
import {productReducer} from "../../base/store/Product/product-reducer";
import {productsReducer} from "../../base/store/Products/products-reducer";

const rootReducer = combineReducers({
 products: productsReducer,
 product: productReducer,
 search: searchReducer,
})

const sagaMiddleware = createSagaMiddleware();

// @ts-ignore
const composeEnhancers = window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] as typeof compose || compose;

const configureStore = (preloadedState: any) => createStore(
  rootReducer,
  preloadedState,
  composeEnhancers(applyMiddleware(sagaMiddleware)),
);

const store = configureStore({});
sagaMiddleware.run(rootSaga);  //----must before store

export default store;

