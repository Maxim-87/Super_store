import React, {useEffect} from 'react';
import {Product} from "../../../base/components/Product";
import styles from "./Home.module.scss";
import {useDispatch, useSelector} from "react-redux";
// import {AppRootStateType} from "../../../starter/store/store";
import {getProductsTC} from "../../../base/store/Products/thunk";
import hash from 'object-hash';
import {useNavigate} from "react-router-dom";
import mainModuleRoutes from "../../../base/constants/routes/mainModuleRoutes";
import {InputSearch} from "../../../base/components/InputSearch/InputSearch";
import LoaderSpinner from "../../../base/components/LoaderSpinner";
import {getProductsAction} from "../../../base/store/Products/actions";

export const Home = () => {
  const dispatch = useDispatch();
  const products: any = useSelector<any>(state => state.products)
  const isLoading: any = useSelector<any>(state => state.products.products.isLoading)
  const history = useNavigate();
  console.log('products', products);
  console.log('ISLOADING HOME = ', isLoading);

  useEffect(() => {
    // if(products.data) {
    //   return
    // }
    // @ts-ignore
    // dispatch(getProductsTC());
    dispatch(getProductsAction());
    console.log('useEffect home')
  }, [])

  const redirectToAddProductPageHandler = () => {
    history(mainModuleRoutes.create.root)
  }



  return (
    <div className={styles.home}>
      {isLoading ? <LoaderSpinner/> : <>
        <input type="text"/>
        <h2>Товары</h2>
        <button onClick={redirectToAddProductPageHandler}> Добавить товар </button>
        <InputSearch />
        <div className={styles.title}>
          <h3>Название</h3>
          <h3>Статус</h3>
          <h3>Цена</h3>
        </div>
        <div className={styles.prod}>
          {products?.products?.data?.map((product: any) => (
            <Product product={product} key={hash(product)}/>
          ))}
        </div>
      </>}
    </div>
  );
};

export default null;