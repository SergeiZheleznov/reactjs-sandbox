import React, {useEffect} from 'react';
import {HeroAddToCartButton, HeroImage, ResourcesList} from '../';
import {detectResourceListOverflow} from "../../utils";
import styles from './HeroAccordion.module.scss';
import Logger from "js-logger";
const LOG_SOURCE = 'HeroAccordion.jsx';

export const HeroAccordion = (props) => {

  const {products, activeProduct, setActiveProduct, addToCartHandler} = props;

  useEffect(() => {
    Logger.info(`${LOG_SOURCE}: component did mount`);
    detectResourceListOverflow();
  },[activeProduct]);

  const onAccordionHeaderClick = (event) => {
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
      {products.map(product => (
        <div key={`product_section_${product.id}`} className={`${styles.section}${product.id === activeProduct.id ? ' ' + styles.active : ''}`}>
          <div className={styles.header}>
            <a data-id={product.id} href="#" onClick={onAccordionHeaderClick}>
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
      ))}
    </div>
  );
}