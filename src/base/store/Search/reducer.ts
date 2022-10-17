import {searchProductActionsType} from "./types";
import * as searchTypes from "./constants";


export type SearchState = {
  search: string,
}
const initialState: SearchState = {
 search: '',
}

export const searchReducer = (state: SearchState = initialState, action: searchProductActionsType): SearchState => {
  switch (action.type) {
    case searchTypes.BASE_SEARCH_PRODUCT: {
      const { payload } = action;
      console.log('BASE_SEARCH_PRODUCT', payload)
      return {
        ...state,
        search: payload,
      }
    }
    default: {
      return state;
    }
  }
}