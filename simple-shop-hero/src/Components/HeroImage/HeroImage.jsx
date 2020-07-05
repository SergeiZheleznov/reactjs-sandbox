import React from 'react';
import styles from './HeroImage.module.scss';

export const HeroImage = (props) => {
  const {product} = props;
  return(
    <div className={styles.base}>
      <div className={styles.topSection}>
        <div className={styles.topSectionContent}>
          {props.children}
        </div>
      </div>
      <img alt="Img" src={product.hero} />
    </div>
  );
}
