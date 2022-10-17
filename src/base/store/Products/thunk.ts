import {productsAPI} from "../../../api/api";
import {createProductAction, getProductsAction} from "./actions";
import {ProductsActionsType} from "./types";
import {Dispatch} from "redux";
import {deleteProductAction} from "./actions";

export const getProductsTC = () => {
  return (dispatch: ThunkDispatch) => {
    productsAPI.getProducts()
      .then((res) => {
        dispatch(getProductsAction(res.data))
      })
  }
}

export const createProductTC = (payload: any) => {
  console.log('createProductTC', payload)
  return (dispatch: ThunkDispatch) => {
    productsAPI.createProduct(payload)
      .then((res) => {
        dispatch(createProductAction(res.data))
      })
  }
}

export const deleteProductTC = (id: number) => {
  return (dispatch: ThunkDispatch) => {
    productsAPI.deleteProduct(id)
      .then((res) => {
        dispatch(deleteProductAction(id))
      })
  }
}

type ThunkDispatch = Dispatch<ProductsActionsType>