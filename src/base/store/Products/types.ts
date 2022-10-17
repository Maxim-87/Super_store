import {createProductAction, getProductsAction, deleteProductAction} from "./actions";

export type GetProductsActionType = ReturnType<typeof getProductsAction>;
export type CreateProductActionType = ReturnType<typeof createProductAction>;
export type DeleteProductActionType = ReturnType<typeof deleteProductAction>;


export type ProductsActionsType =
  GetProductsActionType
  | CreateProductActionType
  | DeleteProductActionType