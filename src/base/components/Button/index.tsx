/* eslint-disable */
import React from 'react';

import cx from 'classnames';

import LoaderSpinner from '../LoaderSpinner';

import styles from './Button.module.scss';

export interface ButtonProps {
  className?: string;
  children?: React.ReactNode;
  onClick?: (event?: React.SyntheticEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  fluid?: boolean;
  type?: 'button' | 'submit' | 'reset';
  theme?: 'black' | 'transparent' | 'onclick' | 'tab';
  size?:
    | 'small-68'
    | 'small-88'
    | 'middle-100'
    | 'middle-115'
    | 'middle-118'
    | 'middle-125'
    | 'middle-137'
    | 'middle-138'
    | 'middle-141'
    | 'middle-164'
    | 'middle-165'
    | 'middle-177'
    | 'middle-179'
    | 'middle-186'
    | 'middle-188'
    | 'middle-194'
    | 'large-205'
    | 'large-207'
    | 'large-236'
    | 'large-244';
  isLoading?: boolean;
}

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const Button = ({
  className,
  onClick,
  disabled,
  type,
  children,
  theme,
  size,
  fluid,
  isLoading,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={cx(
        styles.button,
        {
          [styles['button--fluid']]: fluid,
          [styles[`button--theme--${theme || ''}`]]: theme,
          [styles[`button--size--${size || ''}`]]: size,
        },
        className
      )}
    >
      {isLoading && <LoaderSpinner className={styles.loader_spinner} />}
      {children}
    </button>
  );
};

export default null;
