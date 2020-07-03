import React from 'react';
import styles from './HeroImage.module.scss';

export const HeroImage = (props) => {
  const {product} = props;
  return(
    <div className={styles.base}>
      <div className={styles.TopSection}>
        <div className={styles.TopSectionContent}>
          {props.children}
        </div>
      </div>
      <img alt="Img" src={product.hero} />
    </div>
  );
}
