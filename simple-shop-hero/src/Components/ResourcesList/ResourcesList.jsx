import React from 'react';
import styles from './ResourcesList.module.scss';

export const ResourcesList = (props) => {
  const {product} = props;

  return(
    <div className={styles.Wrapper}>
      {product.relatedResources.map(rr => {
        return(
          <div>
            {rr.title}
          </div>
        );
      })}
    </div>
  );
}