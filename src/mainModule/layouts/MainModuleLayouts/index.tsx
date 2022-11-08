/* eslint-disable */
import React from 'react';

import styles from './MainModuleLayout.module.scss';

import { Header } from 'mainModule/containers/Header';
import { ModalWindow } from 'base/containers/ModalWindow';

interface OwnProps {
  children: JSX.Element | JSX.Element[];
}

interface MainModuleLayoutProps extends OwnProps {
  // eslint-disable-next-line react/no-unused-prop-types
  location?: string;
}

export const MainModuleLayout = ({ children }: MainModuleLayoutProps) => {
  return (
    <div className={styles.main_layout}>
      <Header />
      <div className={styles.menu_and_content}>
        <div className={styles.content}>{children}</div>
      </div>
      <ModalWindow />
    </div>
  );
};
