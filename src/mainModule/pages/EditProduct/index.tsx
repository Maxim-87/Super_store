import React, {ChangeEvent, useEffect, useState} from 'react';
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import styles from './EditProduct.module.scss';
import {TextEditor} from "../../../base/components/TextEditor";
import SuperSelect from "../../../base/components/SuperSelect/SuperSelect";
import {DragDropLoader} from "../../../base/containers/DragDropLoader";
import hash from "object-hash";
import mainModuleRoutes from "../../../base/constants/routes/mainModuleRoutes";
import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProductTC} from "../../../base/store/Product/thunk";
import {getProductAction} from "../../../base/store/Product/actions";
// import {AppRootStateType} from "../../../starter/store/store";

const cities = [{id: 1, name: 'Алматы'},{id: 1, name: 'Актобе'}, ]

export const EditProduct = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const product: any = useSelector<any>(state => state.product)

  const [status, setStatus] = useState(['Активный', 'Архивный'])

  const [error, setError] = useState<boolean>(false);
  const [sendAvatar, setSendAvatar] = useState<boolean>(false);
  const [loadFile, setLoadFile] = useState<any>([]);
  const [isDrop, setIsDrop] = useState<boolean>(false)

  const [price, setPrice] = useState<boolean>(false)

  const {productId} = useParams();

  useEffect(() => {
    // @ts-ignore
    // dispatch(getProductTC(productId));
    dispatch(getProductAction(productId));
  }, [])



  // const downloadAvatarOnClick = (e: ChangeEvent<HTMLInputElement>) => {
  //   const avatar = e.target.files;
  //   if (avatar && avatar[0].size > 5 * 1024 * 1024) {
  //     setError(true);
  //   } else {
  //    avatar && setLoadFile(avatar[0]);
  //   }
  //   setSendAvatar(true);
  // };

  const openDropOnClick = () => {
    setIsDrop(prevState => !prevState);
  }

  const deleteImage = (name: any) => {
    setLoadFile(loadFile.filter((i: any) => i.name !== name))
  }

  const redirectToMainPagePageHandler = () => {
    history(mainModuleRoutes.root)
  }

  // const deleteImage = (index: any) => {
  //   // let newFiles = loadFile;
  //   // loadFile.splice(index, 1);
  //
  //   console.log('name',index)
  //   console.log('files', loadFile)
  //   setLoadFile(loadFile.splice(index,1))
  // }

  console.log('load file = ', loadFile)

  return (
    <div className={styles.product}>
      <h2> Изменить товар </h2>
      <div>
        <input className={styles.input} type="text" value={product?.product?.data?.name}/>
      </div>
      <TextEditor/>
      <SuperSelect options={status} className={styles.select}/>
      <button className={styles.load_image} onClick={openDropOnClick} disabled={loadFile.length !== 0}>
        <span>
        Загрузить изображение
        </span>
      </button>
      {isDrop ? <DragDropLoader loadFile={loadFile}
                                setLoadFile={setLoadFile}
                                isDrop={isDrop}
                                setIsDrop={setIsDrop}

      /> : ''}
      {loadFile.length !== 0 && (
        <div className={styles.images_container}>
          {loadFile.map((file: any, index: number) => (
            <div className={styles.image_block} key={hash(file)}>
              <img
                className={styles.image}
                src={URL.createObjectURL(file)}
                alt=""
              />
              <button className={styles.delete_button} onClick={() => deleteImage(file.name)}>
                Удалить
              </button>
            </div>
          ))}
          {loadFile.length !== 3 ? <DragDropLoader loadFile={loadFile}
                          setLoadFile={setLoadFile}
                          isDrop={isDrop}
                          setIsDrop={setIsDrop}

          /> : ''}
        </div>
      )}
      <div className={styles.price_block}>
        Цена
        <div className={styles.price_content}>
          <input type="checkbox" checked={price} onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(e.currentTarget.checked)}/>
          <span> Одна цена для всех городов </span>
          <input type="number" placeholder="Цена" value={price && product?.product?.data?.price}/>
        </div>
      </div>
      <div className={styles.cities_block}>
        <div className={styles.title}>
          <h3> Город </h3>
          <h3> Цена </h3>
        </div>
        <div>
          {!price ? cities.map((city: any) => (
            <div className={styles.city_block} key={hash(city)}>
              <span>{city.name}</span>
              <input type="number" placeholder="Цена"/>
            </div>
          )) : ''}
        </div>
      </div>
      <button>
        Сохранить
      </button>
      <button onClick={redirectToMainPagePageHandler}>
        Отмена
      </button>
    </div>
  );
};

export default null;


