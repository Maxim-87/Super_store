import React, { useEffect } from 'react';

import cx from 'classnames';
import { useSelector } from 'react-redux';

import styles from './ModalWindow.module.scss';

interface ModalWindowProps {
  className?: string;
}

export const ModalWindow = ({ className }: ModalWindowProps) => {
  // const dispatch = useDispatch();
  const {
    modal: { isOpen, modalComponent },
  } = useSelector((state: any) => state);

  useEffect(() => {
    const overflow = isOpen ? 'hidden' : 'auto';

    document.body.style.overflow = overflow;
  }, [isOpen]);
  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (!isOpen) return <></>;

  return (
    <div className={cx(styles.modal_window, className)}>
      <div className={styles.box} tabIndex={-1} />
      <div className={styles.content_wrap}>{modalComponent}</div>
    </div>
  );
};

export default null;
