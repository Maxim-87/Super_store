/* eslint-disable */
import * as productTypes from 'base/store/Product/constants';

export const getProductAction = (payload: any) => ({
  type: productTypes.BASE_GET_PRODUCT,
  payload,
});

export const setProductAction = (payload: any) => ({
  type: productTypes.BASE_SET_PRODUCT,
  payload,
});
