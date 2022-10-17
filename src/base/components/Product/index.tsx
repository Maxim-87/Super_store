import React from 'react';
import styles from './Product.module.scss';
import {useDispatch} from "react-redux";
import {deleteProductTC} from "../../store/Products/thunk";
import mainModuleRoutes from "../../constants/routes/mainModuleRoutes";
import {useNavigate} from "react-router-dom";

interface ProductProps {
  className?: string,
  product?: any,
}

export const Product = ({product}: ProductProps) => {
  const dispatch = useDispatch();
  const history = useNavigate();
  console.log(product);

  const baseUrl = 'http://localhost:4000/'

  const deleteProductHandler = (id: number) => {
    // @ts-ignore
    dispatch(deleteProductTC(id))
  }

  const redirectToEditProductPageHandler = (id: number) => {
    history(`${mainModuleRoutes.edit.root}/${id}`)
  }
  return (
    <div className={styles.product}>
      <input type="checkbox"/>
      <div className={styles.image_wrapper}>
        <img className={styles.image} src={`${baseUrl}${product.image}`} alt=""/>
      </div>
      <p>{product.name}</p>
      <p>{product.status ? product.status : 'status'}</p>
      <p>{product.price}</p>
      <button onClick={() => deleteProductHandler(product._id)}>
        удалить товар
      </button>
      <button className={styles.edit_button} onClick={() => redirectToEditProductPageHandler(product._id)}>
        редактровать товар
      </button>
    </div>

  );
};

export default null;