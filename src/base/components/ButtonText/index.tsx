import React from 'react';

import cx from 'classnames';

import styles from './ButtonText.module.scss';

import { Text, TextColorsType, TextType } from 'base/components/Text';

interface ButtonTextProps {
  className?: string;
  text: string;
  // eslint-disable-next-line no-unused-vars
  onClick: (event?: React.SyntheticEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  textType: TextType;
  textColor?: TextColorsType;
  textAlign?: 'left' | 'center' | 'right';
}

export const ButtonText = ({
  className,
  text,
  onClick,
  disabled,
  textType,
  textColor,
  textAlign,
}: ButtonTextProps) => (
  // eslint-disable-next-line react/button-has-type
  <button onClick={onClick} className={cx(styles.button_text, className)} disabled={disabled}>
    <Text type={textType} color={textColor} align={textAlign}>
      {text}
    </Text>
  </button>
);

export default null;
