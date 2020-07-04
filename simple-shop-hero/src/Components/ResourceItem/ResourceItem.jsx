import React from 'react';
import styles from './ResourceItem.module.scss';

export const ResourceItem = (props) => {
  const {resource, onResourceClickHandler} = props;

  return(
    <div className={styles.base}>
      <a href={resource.url} onClick={onResourceClickHandler} className={styles.Wrapper}>
        <img src={resource.img} alt={resource.title} />
        <span className={styles.Title}>{resource.title}</span>
      </a>
    </div>
  );
}
