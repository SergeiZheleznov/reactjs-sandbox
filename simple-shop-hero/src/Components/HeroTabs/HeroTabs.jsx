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

  const {products, activeProduct, setActiveProduct, addToCartHandler} = props;

  useEffect(() => {
    Logger.info(`${LOG_SOURCE}: component did mount`);
  },[activeProduct]);

  const onTabClickHandler = (event) => {
    event.preventDefault();
    const id = event.currentTarget.dataset.id;
    const product = products.find(p => p.id.toString() === id);
    if (!product) {
      Logger.warn(`${LOG_SOURCE}: product with id=${id} was not found!`);
      return;
    }
    setActiveProduct(product);
    Logger.info(`${LOG_SOURCE}: product was selected`, product);
  }

  return(
    <div className={styles.base}>
      <HeroImage key={`product_${activeProduct.id}`} product={activeProduct} >
        <HeroAddToCartButton addToCartHandler={addToCartHandler} product={activeProduct} />
      </HeroImage>
      <div className={styles.relatedResources}>
        <ul>
          {products.map(product => (
            <li className={product.id === activeProduct.id ? styles.active : ''} key={`product_${product.id}`}>
              <a data-id={product.id} onClick={onTabClickHandler} href={`/#tab${product.id}`}>{product.title}</a>
            </li>
          ))}
        </ul>
        <ResourcesList product={activeProduct} />
      </div>
    </div>
  );
}