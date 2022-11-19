import React, { useEffect } from 'react';

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { object, string } from 'yup';

import { Button } from 'base/components/Button';
import { ButtonClose } from 'base/components/ButtonClose';
import { ButtonText } from 'base/components/ButtonText';
import { InputValidation } from 'base/components/InputValidation';
import LoaderSpinner from 'base/components/LoaderSpinner';
import { Text } from 'base/components/Text';
import styles from 'base/modals/loginModal/LoginModal.module.scss';
import { RegistrationModal } from 'base/modals/registrationModal/RegistrationModal';
import { loginAction } from 'base/store/Auth/actions';
import { modalCloseAction, modalOpenAction } from 'base/store/Modal/actions';
import { BaseState } from 'base/types/store/state';

// eslint-disable-next-line no-unused-vars
type LoginModalProps = {};

interface LoginModalFieldsType {
  email: string;
  password: string;
}

export const initialValues = {
  email: '',
  password: '',
};

const validationSchema = object().shape({
  password: string(),
});

// eslint-disable-next-line no-empty-pattern
export const LoginModal = ({}: LoginModalProps) => {
  const dispatch = useDispatch();

  const {
    auth: { auth },
    registration: { register },
  } = useSelector((state: BaseState) => state);

  console.log('LOGIN = ', auth.login);
  console.log('isRegister = ', register.isRegister);

  useEffect(() => {
    if (auth.login) {
      dispatch(modalCloseAction());
    }
  }, [auth]);

  const { handleChange, handleBlur, handleSubmit, touched, setTouched, values, setErrors } =
    useFormik<LoginModalFieldsType>({
      initialValues,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSubmit: (formData: LoginModalFieldsType) => {
        console.log('form data = ', formData);
        dispatch(loginAction(formData));
      },
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

  const modalWindowClose = () => {
    dispatch(modalCloseAction());
  };

  const openLoginModalWindowHandler = () => {
    console.log('open register Modal');
    dispatch(modalOpenAction(<RegistrationModal />));
  };

  return (
    <>
      {' '}
      {auth.isLoading ? (
        <LoaderSpinner />
      ) : (
        <div className={styles.login}>
          <div className={styles.close_block}>
            <ButtonClose className={styles.image} onClick={modalWindowClose} />
          </div>
          <div className={styles.content}>
            <Text type="normal-500-24-29">Войти</Text>
            <div className={styles.form}>
              <InputValidation
                className={styles.input}
                label="Электронная почта"
                name="email"
                placeholder="Ваша почта"
                required
                value={values.email}
                onChange={onChangeHandler}
                onBlur={(event) => {
                  handleBlur(event);
                  setTouched({
                    ...touched,
                    email: false,
                  });
                }}
                onFocus={handleBlur}
                disabled={auth.isLoading}
              />
              <InputValidation
                className={styles.input}
                label="Пароль"
                name="password"
                placeholder="Ваш пароль"
                required
                value={values.password}
                onChange={onChangeHandler}
                onBlur={handleBlur}
                type="password"
                disabled={auth.isLoading}
              />
              <Button
                className={styles.button}
                onClick={() => handleSubmit()}
                disabled={auth.isLoading}
              >
                Войти в аккаунт
              </Button>
            </div>
            <div className={styles.text}>
              <Text type="normal-500-16-19">Не зарегистрированы?</Text>
              <ButtonText
                className={styles.link}
                text="Зарегистрироваться"
                onClick={openLoginModalWindowHandler}
                disabled={auth.isLoading}
                textType="normal-500-16-19"
                textColor="primary-default"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default null;
