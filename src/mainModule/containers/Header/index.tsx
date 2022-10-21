import React from 'react';

import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';

import styles from './Header.module.scss';

import { InputSearch } from 'base/components/InputSearch';

type HeaderProps = {};

interface HeaderFieldsType {
  search: string;
}

export const initialValues = {
  search: '',
};

const validationSchema = object().shape({
  search: string(),
});

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type,no-empty-pattern
export const Header = ({}: HeaderProps) => {
  const history = useNavigate();

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const searchHandler = () => {
    history('search');
  };

  const { handleChange, setErrors, values } = useFormik<HeaderFieldsType>({
    initialValues,
    onSubmit: (): any => {},
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

  return (
    <div className={styles.header}>
      <img className={styles.burger_image} src="" alt="" />
      <div className={styles.input_block}>
        <InputSearch
          name="search"
          placeholder="Поиск..."
          value={values.search}
          required
          onChange={onChangeHandler}
          onClick={searchHandler}
          fluid
        />
      </div>
    </div>
  );
};
export default null;
