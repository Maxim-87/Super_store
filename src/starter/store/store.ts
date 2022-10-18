import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';

import {searchReducer} from "../../base/store/Search/reducer";
import {productReducer} from "../../base/store/Product/reducer";
import {productsReducer} from "../../base/store/Products/reducer";
import rootSaga from "./rootSaga";

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

