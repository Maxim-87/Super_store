import * as productsTypes from '../../store/Products/constants';

export const setProductsAction = (payload: any) => ({
  type: productsTypes.BASE_SET_PRODUCTS,
  payload,
});

export const getProductsAction = () => ({
  type: productsTypes.BASE_GET_PRODUCTS,
});

export const createProductAction = (payload: any) => ({
  type: productsTypes.BASE_CREATE_PRODUCT,
  payload,
});

export const deleteProductAction = (id: number ) => ({
  type: productsTypes.BASE_DELETE_PRODUCT,
  id,
});

export const setAppIsLoadingAction = (payload: boolean) => ({
  type: productsTypes.BASE_APP_LOADING,
   payload
});