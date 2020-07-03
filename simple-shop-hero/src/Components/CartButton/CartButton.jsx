import React from 'react';
import styles from './CartButton.module.scss';
import cartIcon from '../../Assets/IconCart.svg';

export function CartButton(props) {
  const {shoppingCart, addToCartHandler} = props;

  return(
    <button onClick={addToCartHandler} className={styles.CartButton}>
      <img className={styles.Icon} alt="Cart" src={cartIcon} />
      <span className={styles.Count}>{shoppingCart.items.length}</span>
    </button>
  );
}