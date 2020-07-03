import React from 'react';
import styles from "./HeroAddToCartButton.module.scss";

export const HeroAddToCartButton = (props) => {
  const {product, addToCartHandler} = props;

  return(
    <a href="#" data-product={product.id} onClick={addToCartHandler} className={styles.Base}>
      Add to basket
    </a>
  );
}