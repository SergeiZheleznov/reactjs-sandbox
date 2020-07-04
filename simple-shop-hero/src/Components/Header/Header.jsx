import React from 'react';
import styles from './Header.module.scss';

export const Header = (props) => {
  return(
    <div className={styles.base}>
      <div className={styles.container}>
        {props.children}
      </div>
    </div>
  );
}