import {getProductAction} from "./actions";

export type GetProductActionType = ReturnType<typeof getProductAction>;

export type ProductActionsType =
  GetProductActionType
