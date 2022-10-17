import * as searchTypes from '../../store/Search/constants';

export const searchProductAction = (payload: any) => ({
  type: searchTypes.BASE_SEARCH_PRODUCT,
  payload,
});

