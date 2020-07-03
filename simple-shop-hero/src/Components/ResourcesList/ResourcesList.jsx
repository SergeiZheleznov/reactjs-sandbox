import React from 'react';
import styles from './ResourcesList.module.scss';
import {ResourceItem} from "..";


export const ResourcesList = (props) => {
  const {product} = props;

  return(
    <div className={styles.Wrapper}>
      <div className={styles.Inner}>
        {product.relatedResources.map(resource => (<ResourceItem resource={resource} />))}
      </div>
    </div>
  );
}