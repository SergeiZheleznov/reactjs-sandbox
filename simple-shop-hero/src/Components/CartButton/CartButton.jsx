import React from 'react';
import styles from './CartButton.module.scss';
import cartIcon from '../../Assets/IconCart.svg';

export function CartButton(props) {
  const {shoppingCart, onCartButtonClickHandler} = props;
  const itemsInCart = shoppingCart.items.length;
  return(
    <button onClick={onCartButtonClickHandler} className={styles.base}>
      <img className={styles.icon} alt="Cart" src={cartIcon} />
      {itemsInCart ? <span className={styles.count}>{itemsInCart}</span> : ''}
    </button>
  );
}