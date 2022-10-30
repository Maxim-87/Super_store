/* eslint-disable */
import React, { ChangeEvent, useState } from 'react';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import styles from './AddProduct.module.scss';
import { TextEditor } from 'base/components/TextEditor';
import SuperSelect from 'base/components/SuperSelect/SuperSelect';
import { DragDropLoader } from 'base/containers/DragDropLoader';
import hash from 'object-hash';
import mainModuleRoutes from 'base/constants/routes/mainModuleRoutes';
import { useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { number, object, string } from 'yup';
import errorMessages from 'base/constants/errorMessages';
import { Input } from 'base/components/Input';
import { useDispatch } from 'react-redux';
import { createProductAction } from 'base/store/Products/actions';

const cities = [
  { id: 1, name: 'Алматы' },
  { id: 1, name: 'Актобе' },
];

type AddProductProps = {};

interface AddProductFieldsType {
  name: string;
  description: string;
  price: number;
  status: string;
}

const initialValues = {
  name: '',
  description: '',
  price: 0,
  status: '',
};

const validationSchema = object().shape({
  name: string().required(errorMessages.FIELD_IS_REQUIRED),
  description: string().required(errorMessages.FIELD_IS_REQUIRED),
  price: number().required(errorMessages.FIELD_IS_REQUIRED),
  status: string().required(errorMessages.FIELD_IS_REQUIRED),
});

export const AddProduct = ({}: AddProductProps) => {
  const history = useNavigate();
  const dispatch = useDispatch();

  const [status, setStatus] = useState(['Активный', 'Архивный']);

  const [error, setError] = useState<boolean>(false);
  const [sendAvatar, setSendAvatar] = useState<boolean>(false);
  const [loadFile, setLoadFile] = useState<any>([]);
  const [isDrop, setIsDrop] = useState<boolean>(false);

  const [price, setPrice] = useState<boolean>(false);

  const { handleChange, setFieldValue, values, setErrors } = useFormik<AddProductFieldsType>({
    initialValues,
    onSubmit: () => {},
    validationSchema,
    validateOnMount: true,
  });

  const onChangeHandler = React.useCallback(
    ({ name, value }: any) => {
      const event = {
        target: { name, value },
      };
      setErrors(name);
      handleChange(event);
    },
    [handleChange]
  );

  const formData = new FormData();

  for (let i = 0; i < loadFile.length; i++) {
    formData.append('file', loadFile[i]);
  }
  formData.append('type', 'avatar');
  formData.append('file', loadFile);
  // dispatch(putAccountAvatarAction(formData));
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

  const deleteImage = (name: any) => {
    setLoadFile(loadFile.filter((i: any) => i.name !== name));
  };

  const redirectToMainPagePageHandler = () => {
    history(mainModuleRoutes.root);
  };

  const data = {
    name: values.name,
    description: values.description,
    status: values.status,
    price: values.price,
  };

  const createProductHandler = () => {
    const formData = new FormData();
    formData.append('file', loadFile);
    console.log('loadFile =', loadFile);
    dispatch(createProductAction({ ...data, image: formData }));
  };
  // const deleteImage = (index: any) => {
  //   // let newFiles = loadFile;
  //   // loadFile.splice(index, 1);
  //
  //   console.log('name',index)
  //   console.log('files', loadFile)
  //   setLoadFile(loadFile.splice(index,1))
  // }

  return (
    <div className={styles.product}>
      <h2>Добавить товар</h2>
      <Input
        className={styles.input}
        name="name"
        value={values.name}
        placeholder={'name'}
        onChange={onChangeHandler}
        type="text"
      />
      <TextEditor value={values.description} setValue={setFieldValue} />
      <SuperSelect options={status} className={styles.select} onChangeOption={setFieldValue} />
      <button
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
          {loadFile.map((file: any, index: number) => (
            <div className={styles.image_block} key={hash(file)}>
              <img className={styles.image} src={URL.createObjectURL(file)} alt="" />
              <button className={styles.delete_button} onClick={() => deleteImage(file.name)}>
                Удалить
              </button>
            </div>
          ))}
          {loadFile.length !== 3 ? (
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
          <input
            type="checkbox"
            checked={price}
            onChange={(e: ChangeEvent<HTMLInputElement>) => setPrice(e.currentTarget.checked)}
          />
          <span> Одна цена для всех городов </span>
          <Input
            type="number"
            name="price"
            value={values.price}
            onChange={onChangeHandler}
            placeholder="Цена"
          />
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
      <button onClick={createProductHandler}>Сохранить</button>
      <button onClick={redirectToMainPagePageHandler}>Отмена</button>
    </div>
  );
};

export default null;
