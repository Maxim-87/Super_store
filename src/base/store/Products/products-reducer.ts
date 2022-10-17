import {ProductsActionsType} from "./types";
import * as productsTypes from "./constants";
import product from "../../components/Product";


export type ProductsState = {
  products: {
    data: Array<any>,
    isLoading: boolean,
  }
}
const initialState: ProductsState = {
  products: {
    data: [],
    isLoading: false,
  }
}

export const productsReducer = (state: ProductsState = initialState, action: ProductsActionsType): ProductsState => {
  switch (action.type) {
    case productsTypes.BASE_SET_PRODUCTS: {
      const { payload } = action
      return {
        ...state,
        products: {
          ...state.products,
          data: [...state.products.data, payload],
        }

      }
    }

    case productsTypes.BASE_DELETE_PRODUCT: {
      const { id } = action;
      console.log('id =', id)
      return {
        ...state,
        products: {
          ...state.products,
          data: state.products.data.filter(product => product._id !== id),
        }
      }
    }

    case productsTypes.BASE_CREATE_PRODUCT: {
      const { payload } = action;
      console.log('payload create =', payload)
      return {
        ...state,
        products: {
          ...state.products,
          data: [...state.products.data, payload],
        }
      }
    }

    case productsTypes.BASE_APP_LOADING: {
      const { payload } = action;
      console.log('payload ISLOADING =', payload)
      return {
        ...state,
        products: {
          ...state.products,
         isLoading: payload,
        }
      }
    }


    default: {
      return state;
    }
  }
}