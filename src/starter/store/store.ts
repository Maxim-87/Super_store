import { applyMiddleware, combineReducers } from 'redux'
import thunkMiddleware, {ThunkAction} from 'redux-thunk'
import {productsReducer} from "../../base/store/Products/products-reducer";
import {ProductsActionsType} from "../../base/store/Products/types";
import { legacy_createStore as createStore} from 'redux'
import { productReducer } from 'base/store/Product/product-reducer';
import {searchReducer} from "../../base/store/Search/reducer";

const rootReducer = combineReducers({
 products: productsReducer,
 product: productReducer,
 search: searchReducer,
})
export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

export type AppRootStateType = ReturnType<typeof rootReducer>

export type RootActionsType = ProductsActionsType

export type ThunkType = ThunkAction<void, AppRootStateType, unknown, RootActionsType>;
// @ts-ignore
window.store = store;
