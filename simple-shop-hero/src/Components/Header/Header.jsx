import React from 'react';
import styles from './Header.module.scss';
import Logo from '../../Assets/logo.png';
import {CartButton} from '../';

export function Header() {

  let items = [
    {
      id: 1,
      title: 'item 1'
    }
  ];

  const onClickHandler = () => {
    alert(items.length);
  }

  return(
    <div className={styles.Wrapper}>
      <div className={styles.Container}>
        <a href="/" className={styles.Logo}>
          <img alt="Logo" src={Logo} />
        </a>
        <CartButton items={items} onClick={onClickHandler} />
      </div>
    </div>
  );
}