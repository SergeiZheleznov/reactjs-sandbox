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
      <div className={styles.inner}>
        <div id="resources_list" className={styles.resourceList}>
          {product.relatedResources.map(resource => (
            <ResourceItem key={`resource_${resource.id}`} onResourceClickHandler={onResourceClickHandler} resource={resource} />
          ))}
        </div>
        <div id="btn_next" className={styles.nextBtn} role="button" tabIndex={0} aria-label="Next" onClick={()=>{alert('nextBtn was clicked')}}>
          <img src={arrowRight} width={48} alt="Right"/>
        </div>
      </div>
    </div>
  );
}