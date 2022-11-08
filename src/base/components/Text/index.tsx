import * as React from 'react';

import cx from 'classnames';

import styles from './Text.module.scss';

export type TextColorsType =
  | 'white'
  | 'primary-default'
  | 'grey'
  | 'grey-dark'
  | 'blue'
  | 'error'
  | 'green';
export type TextType =
  | 'normal-400-12-15'
  | 'normal-400-14-16'
  | 'normal-400-14-17'
  | 'normal-400-14-18'
  | 'normal-400-14-24'
  | 'normal-400-16-19'
  | 'normal-400-16-21'
  | 'normal-400-20-26'
  | 'normal-500-10-12'
  | 'normal-500-12-15'
  | 'normal-500-13-16'
  | 'normal-500-14-16'
  | 'normal-500-14-17'
  | 'normal-500-14-18'
  | 'normal-500-14-24'
  | 'normal-500-16-19'
  | 'normal-500-16-21'
  | 'normal-500-18-22'
  | 'normal-500-20-24'
  | 'normal-500-24-29'
  | 'normal-600-12-14'
  | 'normal-600-12-15'
  | 'normal-600-16-19'
  | 'normal-600-16-21'
  | 'normal-600-18-23'
  | 'normal-600-20-26'
  | 'normal-600-24-29'
  | 'normal-600-24-30'
  | 'normal-600-24-31'
  | 'normal-600-32-39'
  | 'normal-600-32-42'
  | 'normal-700-16-19'
  | 'normal-700-24-29';

export type TextProps = {
  type?: TextType;
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'center' | 'right';
  color?: TextColorsType;
  onClick?: () => void;
};

export const Text: React.FC<TextProps> = ({
  children,
  type,
  className,
  align,
  color,
  onClick,
}: TextProps) => (
  // eslint-disable-next-line jsx-a11y/no-static-element-interactions,jsx-a11y/click-events-have-key-events
  <span
    onClick={onClick}
    className={cx(
      styles.text,
      {
        [styles[`text--type--${type || ''}`]]: type,
        [styles[`text--align--${align || ''}`]]: align,
        [styles[`text--color--${color || ''}`]]: color,
      },
      className
    )}
  >
    {children}
  </span>
);

export default null;
