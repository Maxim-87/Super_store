/* eslint-disable */
import React, { useEffect, useState } from 'react';

import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import hash from 'object-hash';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import styles from './EditProduct.module.scss';

import SuperSelect from 'base/components/SuperSelect/SuperSelect';
import { TextEditor } from 'base/components/TextEditor';
import mainModuleRoutes from 'base/constants/routes/mainModuleRoutes';
import { DragDropLoader } from 'base/containers/DragDropLoader';
import { getProductAction } from 'base/store/Product/actions';

const cities = [
  { id: 1, name: 'Алматы' },
  { id: 1, name: 'Актобе' },
];

export const EditProduct = () => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const product: any = useSelector<any>((state) => state.product);

  const [status, setStatus] = useState(['Активный', 'Архивный']);

  const [error, setError] = useState<boolean>(false);
  const [sendAvatar, setSendAvatar] = useState<boolean>(false);
  const [loadFile, setLoadFile] = useState<any>([]);
  const [isDrop, setIsDrop] = useState<boolean>(false);

  const [price, setPrice] = useState<boolean>(false);

  const { productId } = useParams();

  const maxNumberPhoto = 3;

  useEffect(() => {
    dispatch(getProductAction(productId));
  }, []);

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
    setIsDrop((prevState) => !prevState);
  };

  // const deleteImage = (name: any) => {
  //   setLoadFile(loadFile.filter((i: any) => i.name !== name))
  // }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const redirectToMainPagePageHandler = () => {
    history(mainModuleRoutes.root);
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const deleteImage = (index: any) => {
    // const newFiles = loadFile;

    loadFile.splice(index, 1);
    setLoadFile(loadFile.splice(index, 1));
  };

  return (
    <div className={styles.product}>
      <h2> Изменить товар </h2>
      <TextEditor />
      <SuperSelect options={status} className={styles.select} />
      <button
        type="button"
        className={styles.load_image}
        onClick={openDropOnClick}
        disabled={loadFile.length !== 0}
      >
        <span>Загрузить изображение</span>
      </button>
      {isDrop ? (
        <DragDropLoader
          loadFile={loadFile}
          setLoadFile={setLoadFile}
          isDrop={isDrop}
          setIsDrop={setIsDrop}
        />
      ) : (
        ''
      )}
      {loadFile.length !== 0 && (
        <div className={styles.images_container}>
          {loadFile.map((file: any) => (
            <div className={styles.image_block} key={hash(file)}>
              <img className={styles.image} src={URL.createObjectURL(file)} alt="" />
              <button
                type="button"
                className={styles.delete_button}
                onClick={() => deleteImage(file.name)}
              >
                Удалить
              </button>
            </div>
          ))}
          {loadFile.length !== maxNumberPhoto ? (
            <DragDropLoader
              loadFile={loadFile}
              setLoadFile={setLoadFile}
              isDrop={isDrop}
              setIsDrop={setIsDrop}
            />
          ) : (
            ''
          )}
        </div>
      )}
      <div className={styles.price_block}>
        Цена
        <div className={styles.price_content}>
          <span> Одна цена для всех городов </span>
        </div>
      </div>
      <div className={styles.cities_block}>
        <div className={styles.title}>
          <h3> Город </h3>
          <h3> Цена </h3>
        </div>
        <div>
          {!price
            ? cities.map((city: any) => (
                <div className={styles.city_block} key={hash(city)}>
                  <span>{city.name}</span>
                  <input type="number" placeholder="Цена" />
                </div>
              ))
            : ''}
        </div>
      </div>
      <button type="button">Сохранить</button>
      <button type="button" onClick={redirectToMainPagePageHandler}>
        Отмена
      </button>
    </div>
  );
};

export default null;
