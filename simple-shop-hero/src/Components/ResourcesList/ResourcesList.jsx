import React from 'react';
import styles from './ResourcesList.module.scss';
import {ResourceItem} from "..";
import arrowRight from '../../Assets/IconArrowRight.svg';

export const ResourcesList = (props) => {
  const {product} = props;

  const onResourceClickHandler = (event) => {
    event.preventDefault();
    const el = event.currentTarget;
    alert(`${el}`);
  }

  return(
    <div className={styles.base}>
      <div className={styles.Inner}>
        {product.relatedResources.map(resource => (
          <ResourceItem key={`resource_${resource.id}`} onResourceClickHandler={onResourceClickHandler} resource={resource} />
        ))}
      </div>
      <div className={styles.NextBtn} role="button" tabIndex={0} aria-label="Next">
        <img src={arrowRight} width={24} alt="Right"/>
      </div>
    </div>
  );
}