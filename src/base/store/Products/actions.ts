import * as productsTypes from '../../store/Products/constants';

export const getProductsAction = (payload: any) => ({
  type: productsTypes.BASE_GET_PRODUCTS,
  payload,
});

export const createProductAction = (payload: any) => ({
  type: productsTypes.BASE_CREATE_PRODUCT,
  payload,
});

export const deleteProductAction = (id: number ) => ({
  type: productsTypes.BASE_DELETE_PRODUCT,
  id,
});