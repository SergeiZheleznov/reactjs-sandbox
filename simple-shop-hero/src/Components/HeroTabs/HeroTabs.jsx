import React from 'react';
import {
  HeroImage,
  HeroAddToCartButton,
  ResourcesList
} from '../';
import styles from './HeroTabs.module.scss';

export const HeroTabs = (props) => {

  const {products, activeProduct, setActiveProduct, addToCartHandler} = props;

  const onTabClickHandler = (event) => {
    event.preventDefault();
    const id = event.currentTarget.dataset.id;
    const product = products.filter(p => p.id.toString() === id);
    if (product.length < 1) {
      return;
    }
    setActiveProduct(product[0]);
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