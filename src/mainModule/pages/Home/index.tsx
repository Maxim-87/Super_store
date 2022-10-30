import React, { useEffect } from 'react';

import hash from 'object-hash';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import styles from './Home.module.scss';

import { Button } from 'base/components/Button';
import LoaderSpinner from 'base/components/LoaderSpinner';
import { Product } from 'base/components/Product';
import mainModuleRoutes from 'base/constants/routes/mainModuleRoutes';
import { getProductsAction } from 'base/store/Products/actions';

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Home = () => {
  const dispatch = useDispatch();
  const products: any = useSelector<any>((state) => state.products);
  const isLoading: any = useSelector<any>((state) => state.products.products.isLoading);
  const history = useNavigate();

  useEffect(() => {
    if (products.data) {
      return;
    }
    dispatch(getProductsAction());
  }, [products.data, dispatch]);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const redirectToAddProductPageHandler = () => {
    history(mainModuleRoutes.create.root);
  };

  return (
    <div className={styles.home}>
      {!isLoading ? (
        <LoaderSpinner />
      ) : (
        <>
          <h2>Товары</h2>
          <Button onClick={redirectToAddProductPageHandler}> Добавить товар </Button>
          <div className={styles.products_items}>
            {products?.products?.data?.map((product: any) => (
              <Product product={product} key={hash(product)} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default null;
