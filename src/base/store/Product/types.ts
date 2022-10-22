import { getProductAction, setProductAction } from './actions';

export type GetProductActionType = ReturnType<typeof getProductAction>;
export type SetProductActionType = ReturnType<typeof setProductAction>;

export type ProductActionsType = GetProductActionType | SetProductActionType;
