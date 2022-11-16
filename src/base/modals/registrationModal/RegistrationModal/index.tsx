import React, { useEffect } from 'react';

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { object, string } from 'yup';

import styles from './RegistrationModal.module.scss';

import { Button } from 'base/components/Button';
import { ButtonClose } from 'base/components/ButtonClose';
import { ButtonText } from 'base/components/ButtonText';
import { InputValidation } from 'base/components/InputValidation';
import LoaderSpinner from 'base/components/LoaderSpinner';
import { Text } from 'base/components/Text';
import { LoginModal } from 'base/modals/loginModal';
import { modalCloseAction, modalOpenAction } from 'base/store/Modal/actions';
import { registerAction } from 'base/store/Registration/actions';
import { BaseState } from 'base/types/store';

// eslint-disable-next-line no-unused-vars
type RegistrationModalProps = {};

interface RegistrationModalFieldsType {
  // firstName: string;
  email: string;
  password: string;
}

export const initialValues = {
  // firstName: '',
  email: '',
  password: '',
};

const validationSchema = object().shape({
  firstName: string(),
  // email: emailYup('Please enter a valid email address.').required('Required field'),
  password: string(),
  // .required(errorMessages.FIELD_IS_REQUIRED)
  // .matches(regex.password, errorMessages.INVALID_PASSWORD),
});

// eslint-disable-next-line no-empty-pattern
export const RegistrationModal = ({}: RegistrationModalProps) => {
  const dispatch = useDispatch();
  const {
    registration: { register },
  }: any = useSelector<BaseState>((state: BaseState) => state);

  useEffect(() => {
    if (!register.isRegister) return;
    dispatch(modalOpenAction(<LoginModal />));
  }, [register.isRegister]);

  console.log('isRegister = ', register.isRegister);

  const { handleChange, handleBlur, handleSubmit, touched, setTouched, values, setErrors } =
    useFormik<RegistrationModalFieldsType>({
      initialValues,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      onSubmit: (formData: RegistrationModalFieldsType) => {
        console.log('form data = ', formData);
        dispatch(registerAction(formData));
        dispatch(modalOpenAction(<LoginModal />));
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

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const openLoginModalWindowHandler = () => {
    console.log('open register Modal');
    dispatch(modalOpenAction(<LoginModal />));
  };

  // eslint-disable-next-line no-unused-vars
  // const emailError = useMemo(() => {
  //   if (register.isLoading) return '';
  //   if (errors.email) return errors.email;
  //   if (register.error) {
  //     setTouched({
  //       ...touched,
  //       email: false,
  //     });
  //
  //     return register.error;
  //   }
  //
  //   return '';
  // }, [register, errors]);

  return (
    <div className={styles.registration}>
      {register.isLoading && <LoaderSpinner />}
      <div className={styles.close_block}>
        <ButtonClose className={styles.image} onClick={modalWindowClose} />
      </div>
      <div className={styles.content}>
        <Text type="normal-500-24-29">Создайте аккаунт</Text>
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
            disabled={register.isLoading}
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
            disabled={register.isLoading}
          />
          <Button
            className={styles.button}
            onClick={() => handleSubmit()}
            disabled={register.isLoading}
          >
            Создать аккаунт
          </Button>
        </div>
        <div className={styles.text}>
          <Text type="normal-500-16-19">Уже зарегистрированы?</Text>
          <ButtonText
            className={styles.link}
            text="Войдите"
            onClick={openLoginModalWindowHandler}
            disabled={register.isLoading}
            textType="normal-500-16-19"
            textColor="primary-default"
          />
        </div>
      </div>
    </div>
  );
};

export default null;
