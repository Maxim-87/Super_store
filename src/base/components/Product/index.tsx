/* eslint-disable */
import React, { useState } from 'react';

import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Product.module.scss';

import { Button } from 'base/components/Button';
import { Text } from 'base/components/Text';
import mainModuleRoutes from 'base/constants/routes/mainModuleRoutes';

interface ProductProps {
  className?: string;
  product?: any;
}

export const Product = ({ product }: ProductProps) => {
  const dispatch = useDispatch();
  const history = useNavigate();

  const [isAdmin, setIsAdmin] = useState<boolean>(true);

  console.log(product);

  const baseUrl = 'http://localhost:4000/';

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const deleteProductHandler = (id: number) => {
    // @ts-ignore
    dispatch(deleteProductTC(id));
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const redirectToEditProductPageHandler = (id: number) => {
    history(`${mainModuleRoutes.edit.root}/${id}`);
  };

  return (
    <div className={styles.product}>
      <Text type={'normal-700-24-29'}>{product.name}</Text>
      <div className={styles.product_item}>
        <div className={styles.image_wrapper}>
          <img className={styles.image} src={`${baseUrl}${product.image}`} alt="" />
        </div>
        <div className="item_content">
          <h4>{product.description}</h4>
          <h4>{product.status ? product.status : 'status'}</h4>
          <h4>{product.price}</h4>
          {isAdmin ? (
            <>
              <Button
                className={styles.delete_button}
                onClick={() => deleteProductHandler(product._id)}
              >
                delete
              </Button>
              <Button
                className={styles.edit_button}
                onClick={() => redirectToEditProductPageHandler(product._id)}
              >
                edit
              </Button>
            </>
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
