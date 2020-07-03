import React from 'react';
import styles from './Header.module.scss';

export const Header = (props) => {
  return(
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        {props.children}
      </div>
    </div>
  );
}