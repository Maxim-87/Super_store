import React from 'react';
import styles from './Product.module.scss';
import {useDispatch} from "react-redux";
import {deleteProductTC} from "../../store/Products/thunk";
import mainModuleRoutes from "../../constants/routes/mainModuleRoutes";
import {useNavigate} from "react-router-dom";
import {Button} from "base/components/Button";

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
      <h4>{product.name}</h4>
      <div className={styles.image_wrapper}>
        <img className={styles.image} src={`${baseUrl}${product.image}`} alt=""/>
      </div>
      <h4>{product.description}</h4>
      <h4>{product.status ? product.status : 'status'}</h4>
      <h4>{product.price}</h4>
      <Button className={styles.delete_button} onClick={() => deleteProductHandler(product._id)}>
       delete
      </Button>
      <Button className={styles.edit_button} onClick={() => redirectToEditProductPageHandler(product._id)}>
        edit
      </Button>
    </div>

  );
};

export default null;