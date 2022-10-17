import {productsAPI} from "../../../api/api";
import {getProductAction} from "./actions";
import {ProductActionsType} from "./types";
import {Dispatch} from "redux";

export const getProductTC = (id: number) => {
  return (dispatch: ThunkDispatch) => {
    productsAPI.getProduct(id)
      .then((res) => {
        dispatch(getProductAction(res.data))
      })
  }
}

type ThunkDispatch = Dispatch<ProductActionsType>