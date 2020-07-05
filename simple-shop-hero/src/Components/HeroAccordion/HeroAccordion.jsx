import React, {useEffect} from 'react';
import {HeroAddToCartButton, HeroImage, ResourcesList} from '../';
import {detectResourceListOverflow} from "../../utils";
import styles from './HeroAccordion.module.scss';
import Logger from "js-logger";
import arrowRight from '../../Assets/IconArrowRight.svg';
import arrowDown from '../../Assets/IconArrowDown.svg';

const LOG_SOURCE = 'HeroAccordion.jsx';

export const HeroAccordion = (props) => {

  const {products, activeProduct, selectProductHandler, addToCartHandler} = props;

  useEffect(() => {
    Logger.info(`${LOG_SOURCE}: component did mount`);
    detectResourceListOverflow();
  },[activeProduct]);

  return(
    <div className={styles.base}>
      {products.map(product => {
        const isActive = product.id === activeProduct.id;
        return (
        <div key={`product_section_${product.id}`} className={`${styles.section}${isActive ? ' ' + styles.active : ''}`}>
          <div className={styles.header}>
            <a data-id={product.id} href={`/#product_${product.id}`} onClick={selectProductHandler}>
              <img src={isActive ? arrowDown : arrowRight} width={26} alt="Arrow icon"/>
              <span>{product.title}</span>
            </a>
          </div>
          {product.id === activeProduct.id ?
            <div className={styles.content}>
              <HeroImage key={`product_${activeProduct.id}`} product={activeProduct} >
                <HeroAddToCartButton addToCartHandler={addToCartHandler} product={activeProduct} />
              </HeroImage>
              <ResourcesList product={activeProduct} />
            </div>
          : ''}
        </div>
      );
    })}
    </div>
  );
}