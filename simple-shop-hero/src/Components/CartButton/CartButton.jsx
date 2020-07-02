import React from 'react';
import styles from './CartButton.module.scss';
import cartIcon from '../../Assets/IconCart.svg';

export function CartButton(props) {
  const {items, onClick} = props;
  return(
    <button onClick={onClick} className={styles.CartButton}>
      <img className={styles.Icon} alt="Cart" src={cartIcon} />
      <span className={styles.Count}>{items.length}</span>
    </button>
  );
}