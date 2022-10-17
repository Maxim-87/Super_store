import {
  createProductAction,
  getProductsAction,
  deleteProductAction,
  setAppIsLoadingAction, setProductsAction
} from "./actions";

export type SetProductsActionType = ReturnType<typeof setProductsAction>;

export type GetProductsActionType = ReturnType<typeof getProductsAction>;
export type CreateProductActionType = ReturnType<typeof createProductAction>;
export type DeleteProductActionType = ReturnType<typeof deleteProductAction>;

export type SetAppIsLoadingActionType = ReturnType<typeof setAppIsLoadingAction>;


export type ProductsActionsType =
  SetProductsActionType
  | GetProductsActionType
  | CreateProductActionType
  | DeleteProductActionType
  | SetAppIsLoadingActionType