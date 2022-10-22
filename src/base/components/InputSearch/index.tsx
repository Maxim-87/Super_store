/* eslint-disable */
import React from 'react';

import cx from 'classnames';

import styles from './InputSearch.module.scss';

import { Button } from 'base/components/Button';
import { Input } from 'base/components/Input';

interface InputSearchProps {
  className?: string;
  placeholder?: string;
  name: string;
  required?: boolean;
  disabled?: boolean;
  fluid?: boolean;
  value: string;
  // eslint-disable-next-line no-unused-vars
  onChange: (obj: {
    name: string;
    value?: string | number;
    event?: React.SyntheticEvent<HTMLInputElement>;
  }) => void;
  onClick?: () => void;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const InputSearch = ({
  className,
  name,
  placeholder,
  required,
  disabled,
  fluid,
  onChange,
  onClick,
  value,
}: InputSearchProps) => (
  <div className={cx(styles.input_search, className)}>
    <div className={styles.img_wrap}>
      {/* <Button className={styles.button} onClick={onClick}> */}
      {/*  /!* <img src={icons.searchIcon} alt="" /> *!/ */}
      {/* </Button> */}
    </div>
    <Input
      name={name}
      className={styles.input}
      placeholder={placeholder}
      required={required}
      disabled={disabled}
      fluid={fluid}
      onChange={onChange}
      value={value}
    />
  </div>
);

export default null;
