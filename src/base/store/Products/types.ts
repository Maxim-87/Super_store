import {
  createProductAction,
  getProductsAction,
  deleteProductAction,
  setAppIsLoadingAction,
  setProductsAction,
  createProductSuccessAction,
  createProductErrorAction,
  deleteProductSuccessAction,
  deleteProductErrorAction,
} from './actions';

export type SetProductsActionType = ReturnType<typeof setProductsAction>;

export type GetProductsActionType = ReturnType<typeof getProductsAction>;

export type CreateProductActionType = ReturnType<typeof createProductAction>;
export type CreateProductSuccessActionType = ReturnType<typeof createProductSuccessAction>;
export type CreateProductErrorActionType = ReturnType<typeof createProductErrorAction>;

export type DeleteProductActionType = ReturnType<typeof deleteProductAction>;
export type DeleteProductSuccessActionType = ReturnType<typeof deleteProductSuccessAction>;
export type DeleteProductErrorActionType = ReturnType<typeof deleteProductErrorAction>;

export type SetAppIsLoadingActionType = ReturnType<typeof setAppIsLoadingAction>;

export type ProductsActionsType =
  | SetProductsActionType
  | GetProductsActionType
  | CreateProductActionType
  | CreateProductSuccessActionType
  | CreateProductErrorActionType
  | DeleteProductActionType
  | DeleteProductSuccessActionType
  | DeleteProductErrorActionType
  | SetAppIsLoadingActionType;
