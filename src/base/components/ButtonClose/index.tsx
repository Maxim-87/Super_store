import React from 'react';

import cx from 'classnames';

import styles from './ButtonClose.module.scss';

import { icons } from 'base/assets/icons';

interface ButtonCloseProps {
  className?: string;
  icon?: string;
  onClick?: () => void;
  disabled?: boolean;
}

export const ButtonClose = ({ className, icon, onClick, disabled }: ButtonCloseProps) => (
  // eslint-disable-next-line react/button-has-type
  <button className={cx(styles['button-close'], className)} onClick={onClick} disabled={disabled}>
    <img src={!icon ? icons.exitIcon : icon} alt="" />
  </button>
);

export default null;
