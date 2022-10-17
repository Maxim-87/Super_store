import {ProductActionsType} from "./types";
import * as productTypes from "./constants";


export type ProductState = {
  product: {
    data: {}
  }
}
const initialState: ProductState = {
  product: {
    data: {},
  }
}

export const productReducer = (state: ProductState = initialState, action: ProductActionsType): ProductState => {
  switch (action.type) {
    case productTypes.BASE_GET_PRODUCT: {
      const { payload } = action;
      return {
        ...state,
        product: {
          ...state.product,
          data: payload,
        }

      }
    }
    default: {
      return state;
    }
  }
}