import React, {useEffect} from 'react';
import {
  HeroImage,
  HeroAddToCartButton,
  ResourcesList
} from '../';
import styles from './HeroTabs.module.scss';
import Logger from "js-logger";
const LOG_SOURCE = 'HeroTabs.jsx';

export const HeroTabs = (props) => {

  const {products, activeProduct, selectProductHandler, addToCartHandler} = props;

  useEffect(() => {
    Logger.info(`${LOG_SOURCE}: component did mount`);
  },[activeProduct]);

  return(
    <div className={styles.base}>
      <HeroImage key={`product_${activeProduct.id}`} product={activeProduct} >
        <HeroAddToCartButton addToCartHandler={addToCartHandler} product={activeProduct} />
      </HeroImage>
      <div className={styles.relatedResources}>
        <ul>
          {products.map(product => (
            <li className={product.id === activeProduct.id ? styles.active : ''} key={`product_${product.id}`}>
              <a data-id={product.id} onClick={selectProductHandler} href={`/#tab${product.id}`}>{product.title}</a>
            </li>
          ))}
        </ul>
        <ResourcesList product={activeProduct} />
      </div>
    </div>
  );
}