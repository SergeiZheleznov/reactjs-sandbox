import React from 'react';
import styles from './ResourcesList.module.scss';

export const ResourcesList = (props) => {
  const {product} = props;

  return(
    <div className={styles.Wrapper}>
      {product.relatedResources.map(rr => {
        return(
          <div key={`resource_${rr.id}`}>
            {rr.title}
          </div>
        );
      })}
    </div>
  );
}