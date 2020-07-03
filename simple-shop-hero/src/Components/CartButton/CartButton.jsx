import React from 'react';
import styles from './CartButton.module.scss';
import cartIcon from '../../Assets/IconCart.svg';

export function CartButton(props) {
  const {shoppingCart, onCartButtonClickHandler} = props;

  return(
    <button onClick={onCartButtonClickHandler} className={styles.base}>
      <img className={styles.icon} alt="Cart" src={cartIcon} />
      <span className={styles.count}>{shoppingCart.items.length}</span>
    </button>
  );
}