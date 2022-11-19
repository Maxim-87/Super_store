/* eslint-disable */
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Product.module.scss';

import { Button } from 'base/components/Button';
import { Text } from 'base/components/Text';
import mainModuleRoutes from 'base/constants/routes/mainModuleRoutes';
import { deleteProductAction } from 'base/store/Products/actions';

interface ProductProps {
  className?: string;
  product?: any;
}

export const Product = ({ product }: ProductProps) => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [isAdmin, setIsAdmin] = useState<boolean>(true);

  const baseUrl = 'http://localhost:4000/';

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const deleteProductHandler = (id: number) => {
    dispatch(deleteProductAction(id));
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const redirectToEditProductPageHandler = (id: number) => {
    history(`${mainModuleRoutes.edit.root}/${id}`);
  };

  return (
    <div className={styles.product}>
      <div className={styles.product_text}>
        <Text type={'normal-700-24-29'}>{product.name}</Text>
      </div>
      <div className={styles.card}>
        <div className={styles.image_wrapper}>
          <img className={styles.image} src={`${baseUrl}${product.image}`} alt="" />
        </div>
        <div className={styles.product_item}>
          <div className={styles.info_block}>
            <Text>{product.description}</Text>
            <Text>{product.status ? product.status : 'status'}</Text>
            <Text>{product.price}</Text>
          </div>
          {isAdmin ? (
            <div className={styles.button_block}>
              <Button
                className={styles.product_button}
                size="small-88"
                onClick={() => deleteProductHandler(product._id)}
              >
                delete
              </Button>
              <Button
                className={styles.product_button}
                size="small-88"
                onClick={() => redirectToEditProductPageHandler(product._id)}
              >
                edit
              </Button>
            </div>
          ) : (
            <Button
              className={styles.edit_button}
              onClick={() => redirectToEditProductPageHandler(product._id)}
            >
              add to cart
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default null;
