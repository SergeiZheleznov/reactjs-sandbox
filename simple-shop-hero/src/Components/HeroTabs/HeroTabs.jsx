import React from 'react';
import {HeroImage} from '../';
import styles from './HeroTabs.module.scss';
import { ResourcesList } from '../';

export const HeroTabs = (props) => {

  const {products, activeProduct, setActiveProduct} = props;

  const onTabClickHandler = (event) => {
    event.preventDefault();
    const id = event.currentTarget.dataset.id;
    const product = products.filter(p => p.id == id);
    setActiveProduct(product[0]);
  }

  return(
    <div className={styles.Wrapper}>
      {<HeroImage key={`product_${activeProduct.id}`} product={activeProduct} />}
      <div className={styles.RelatedResources}>
        <ul>
          {products.map(product => (
            <li className={product.id == activeProduct.id ? styles.active : ''} key={`product_${product.id}`}>
              <a data-id={product.id} onClick={onTabClickHandler} href={`/#tab${product.id}`}>{product.title}</a>
            </li>
          ))}
        </ul>
        <ResourcesList product={activeProduct} />
      </div>
    </div>
  );
}