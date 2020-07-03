import React from 'react';
import styles from "./HeroAddToCartButton.module.scss";

export const HeroAddToCartButton = (props) => {
  const {product, addToCartHandler} = props;
  return(
    <button data-product={product.id} onClick={addToCartHandler} className={styles.base}>
      Add to basket
    </button>
  );
}