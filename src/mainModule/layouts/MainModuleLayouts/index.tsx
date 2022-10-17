import React from "react";
import styles from './MainModuleLayout.module.scss';

interface OwnProps {
  children: JSX.Element|JSX.Element[],
}

interface MainModuleLayoutProps extends OwnProps {
  location?: string,
}

export function MainModuleLayout({children,}: MainModuleLayoutProps) {
  return (
    <div className={styles.main_layout}>
      <div className={styles.content}>
        {children}
      </div>
    </div>
  )
}