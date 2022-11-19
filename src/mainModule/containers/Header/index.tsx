import React from 'react';

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { object, string } from 'yup';

import styles from './Header.module.scss';

import { Button } from 'base/components/Button';
import { InputSearch } from 'base/components/InputSearch';
import { LoginModal } from 'base/modals/loginModal';
import { logoutAction } from 'base/store/Auth/actions';
import { modalOpenAction } from 'base/store/Modal/actions';
import { BaseState } from 'base/types/store';

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
  const dispatch = useDispatch();
  const history = useNavigate();
  const {
    auth: {
      auth: { login },
    },
  } = useSelector((state: BaseState) => state);

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

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const openLoginModalWindowHandler = () => {
    console.log('open register Modal');
    dispatch(modalOpenAction(<LoginModal />));
  };

  const logoutHandler = () => {
    dispatch(logoutAction());
  };

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
        />
      </div>
      <div className={styles.login_block}>
        {!login ? (
          <Button size="small-88" onClick={openLoginModalWindowHandler}>
            Login
          </Button>
        ) : (
          <Button size="small-88" onClick={logoutHandler}>
            Logout
          </Button>
        )}
      </div>
    </div>
  );
};
export default null;
