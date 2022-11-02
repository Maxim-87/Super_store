import React, { useMemo, useState } from 'react';

import cx from 'classnames';

import styles from './InputValidation.module.scss';

import { Input } from 'base/components/Input';
import { Text } from 'base/components/Text';

export type InputInfoTypePropsType = 'error' | 'normal' | 'good';
export type InputInfoPropsType = {
  type: InputInfoTypePropsType;
  text: string;
  // isShow?: boolean,
};

interface InputValidationProps {
  className?: string;
  label?: string;
  value: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
  fluid?: boolean;
  // eslint-disable-next-line no-unused-vars
  onChange: (obj: {
    name: string;
    value: string;
    event?: React.SyntheticEvent<HTMLInputElement>;
  }) => void;
  info?: InputInfoPropsType;
  // eslint-disable-next-line no-unused-vars
  onFocus?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  // eslint-disable-next-line no-unused-vars
  onBlur?: (event: React.SyntheticEvent<HTMLInputElement>) => void;
  type?: 'text' | 'password';
}

export const InputValidation = ({
  className,
  label,
  name,
  placeholder,
  required,
  disabled,
  fluid,
  value,
  onChange,
  info,
  onFocus,
  onBlur,
  type = 'text',
}: InputValidationProps) => {
  const [isFocus, setIsFocus] = useState<boolean>(false);
  // const [showError, setShowError] = useState<boolean>(true);

  const isShowInfoText = useMemo(() => {
    if (!info || !info.text) return false;

    // if (isFocus && info.type === 'normal') return true;
    // if (!isFocus && info.type === 'error') return true;
    // if (info.type === 'good') return true;
    // return false;
    return true;
    // }, [info, isFocus]);
  }, [info]);

  const onFocusHandler = (event: any) => {
    setIsFocus(!isFocus);
    if (onFocus) {
      onFocus(event);
    }
  };
  const blurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    // setTimeout(() => {
    setIsFocus(!isFocus);
    // if click of arrow in input number prevent blur
    const isButtonClicked = [
      'stepUp',
      'stepDown',
      // @ts-ignore
    ].includes(e.relatedTarget ? e.relatedTarget.id : '');

    if (!isButtonClicked) {
      // setShowError(true);
      if (onBlur !== undefined) {
        onBlur(e);
      }
    }
    // }, 111);
  };

  // console.log('name= ', name);
  // console.log('info= ', info);
  return (
    <div className={cx(styles.input_validation, className)}>
      <Input
        name={name}
        label={label}
        placeholder={placeholder}
        required={required}
        disabled={disabled}
        onFocus={onFocusHandler}
        onBlur={blurHandler}
        fluid={fluid}
        onChange={onChange}
        value={value}
        type={type}
        className={cx(styles.input, {
          [styles['input--error']]: info && info.type === 'error',
        })}
      />
      {info && isShowInfoText && (
        <Text
          type="normal-400-14-17"
          className={cx(
            styles.input_validation__info,
            styles[`input_validation__info__${info.type}`]
          )}
        >
          {info.text}
        </Text>
      )}
    </div>
  );
};

export default null;
