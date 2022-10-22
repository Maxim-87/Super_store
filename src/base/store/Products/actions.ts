/* eslint-disable */
import * as productsTypes from './constants';
import {
  BASE_CREATE_PRODUCT_ERROR,
  BASE_CREATE_PRODUCT_REQUEST,
  BASE_CREATE_PRODUCT_SUCCESS,
} from './constants';

export const setProductsAction = (payload: any) => ({
  type: productsTypes.BASE_SET_PRODUCTS,
  payload,
});

export const getProductsAction = () => ({
  type: productsTypes.BASE_GET_PRODUCTS,
});

// ------------------------------------- CreateProduct

export const createProductAction = (payload: any) => ({
  type: productsTypes.BASE_CREATE_PRODUCT_REQUEST,
  payload,
});

export const createProductSuccessAction = (payload: any) => ({
  type: productsTypes.BASE_CREATE_PRODUCT_SUCCESS,
  payload,
});

export const createProductErrorAction = (payload: any) => ({
  type: productsTypes.BASE_CREATE_PRODUCT_ERROR,
  payload,
});

export const deleteProductAction = (id: number) => ({
  type: productsTypes.BASE_DELETE_PRODUCT,
  id,
});

export const setAppIsLoadingAction = (payload: boolean) => ({
  type: productsTypes.BASE_APP_LOADING,
  payload,
});
