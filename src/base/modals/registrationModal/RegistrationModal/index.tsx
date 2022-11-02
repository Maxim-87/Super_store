/* eslint-disable */
import React, { useEffect, useMemo } from 'react';

import { useFormik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { object, string } from 'yup';

import styles from './RegistrationModal.module.scss';
import { modalCloseAction } from 'base/store/Modal/actions';
import LoaderSpinner from 'base/components/LoaderSpinner';
import { InputValidation } from 'base/components/InputValidation';
import { Button } from 'base/components/Button';
import { Text } from 'base/components/Text';
import { ButtonText } from 'base/components/ButtonText';
import { ButtonClose } from 'base/components/ButtonClose';

// eslint-disable-next-line no-unused-vars
type RegistrationModalProps = {};

interface RegistrationModalFieldsType {
  firstName: string;
  email: string;
  password: string;
}

export const initialValues = {
  firstName: '',
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
  const { register } = useSelector((state: any) => state.base.registration);

  // useEffect(() => {
  //   if (!register.isRegister) return;
  //   dispatch(modalOpenAction(<VerificationEmailModal />));
  // }, [register.isRegister]);

  const { handleChange, handleBlur, handleSubmit, touched, setTouched, values, errors, setErrors } =
    useFormik<RegistrationModalFieldsType>({
      initialValues,
      onSubmit: (formData: RegistrationModalFieldsType) => {
        // dispatch(registerAction(formData));
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

  // eslint-disable-next-line no-unused-vars
  const emailError = useMemo(() => {
    if (register.isLoading) return '';
    if (errors.email) return errors.email;
    if (register.error) {
      setTouched({
        ...touched,
        email: false,
      });

      return register.error;
    }

    return '';
  }, [register, errors]);

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
            label="Имя"
            name="firstName"
            placeholder="Ваше имя"
            required
            value={values.firstName}
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
            fluid
          />
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
            fluid
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
            fluid
          />
          <Button
            className={styles.button}
            onClick={() => handleSubmit()}
            disabled={register.isLoading}
          >
            Создать аккаунт
          </Button>
        </div>
        <Text type="normal-400-12-15">
          Регистрируясь, вы даёте согласие на обработку персональных данных и принимаете условия
          пользовательского соглашения
        </Text>
        <div className={styles.text}>
          <Text type="normal-500-16-19">Уже зарегистрированы?</Text>
          <ButtonText
            className={styles.link}
            text="Войдите"
            onClick={() => {}}
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
