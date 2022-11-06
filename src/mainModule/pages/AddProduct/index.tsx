/* eslint-disable */
import React, { useState } from 'react';
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
import { Button } from 'base/components/Button';

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
  //   setLoadFile(loadFile.splice(index,1))
  // }

  return (
    <div className={styles.product}>
      <h2>Добавить товар</h2>
      <div className={styles.content}>
        <Input
          className={styles.input}
          name="name"
          value={values.name}
          placeholder={'name'}
          onChange={onChangeHandler}
          type="text"
          fluid
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
      </div>
      <Button className={styles.button} fluid onClick={createProductHandler}>
        Сохранить
      </Button>
      <Button className={styles.button} fluid onClick={redirectToMainPagePageHandler}>
        Отмена
      </Button>
    </div>
  );
};

export default null;
