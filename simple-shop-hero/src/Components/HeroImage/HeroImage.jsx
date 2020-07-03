import React from 'react';
import styles from './HeroImage.module.scss';

export const HeroImage = (props) => {

  const {product} = props;

  return(
    <div className={styles.Wrapper}>
      <div className={styles.SlideMain}>
        <div className={styles.TopSection}>
          <div className={styles.TopSectionContent}>
            <button className={styles.AddToBasketBtn}>Add to basket</button>
          </div>
        </div>
        <img alt="Img" src={product.hero} />
      </div>
    </div>
  );
}