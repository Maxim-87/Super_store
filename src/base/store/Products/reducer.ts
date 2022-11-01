import * as productsTypes from './constants';
import { ProductsActionsType } from './types';

import { RequestInfoType } from 'base/types/base/reducer';
import { RequestInfoState } from 'base/types/base/state';

export type ProductsState = {
  products: {
    data: Array<any>;
  } & RequestInfoType;
};
const initialState: ProductsState = {
  products: {
    data: [],
    ...RequestInfoState,
  },
};

export const productsReducer = (
  // eslint-disable-next-line default-param-last
  state: ProductsState = initialState,
  action: ProductsActionsType
): ProductsState => {
  switch (action.type) {
    case productsTypes.BASE_SET_PRODUCTS: {
      const { payload } = action;

      return {
        ...state,
        products: {
          ...state.products,
          data: payload,
        },
      };
    }

    case productsTypes.BASE_CREATE_PRODUCT_REQUEST: {
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: true,
        },
      };
    }

    case productsTypes.BASE_CREATE_PRODUCT_SUCCESS: {
      const { payload } = action;

      return {
        ...state,
        products: {
          ...state.products,
          data: [...state.products.data, payload],
          isLoading: false,
        },
      };
    }

    case productsTypes.BASE_CREATE_PRODUCT_ERROR: {
      const { payload } = action;

      return {
        ...state,
        products: {
          ...state.products,
          data: [...state.products.data, payload],
          isLoading: false,
          error: payload.error,
        },
      };
    }

    // ----------------------------------- deleteProduct

    case productsTypes.BASE_DELETE_PRODUCT_REQUEST: {
      return {
        ...state,
        products: {
          ...state.products,
          isLoading: true,
        },
      };
    }

    case productsTypes.BASE_DELETE_PRODUCT_SUCCESS: {
      const { id }: any = action;

      console.log('id delete reducer = ', id);

      return {
        ...state,
        products: {
          ...state.products,
          // eslint-disable-next-line no-underscore-dangle
          data: state.products.data.filter((product) => product._id !== id),
          isLoading: false,
        },
      };
    }

    case productsTypes.BASE_DELETE_PRODUCT_ERROR: {
      const { payload } = action;

      return {
        ...state,
        products: {
          ...state.products,
          data: [...state.products.data, payload],
          isLoading: false,
          error: payload.error,
        },
      };
    }

    case productsTypes.BASE_APP_LOADING: {
      const { payload } = action;

      return {
        ...state,
        products: {
          ...state.products,
          isLoading: payload,
        },
      };
    }

    default: {
      return state;
    }
  }
};
