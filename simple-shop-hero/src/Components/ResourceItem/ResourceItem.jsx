import React from 'react';
import styles from './ResourceItem.module.scss';

export const ResourceItem = (props) => {
  const {resource} = props;

  return(
    <a href={resource.url} className={styles.Wrapper}>
      <img src={resource.img} alt={resource.title} />
      <span className={styles.Title}>{resource.title}</span>
    </a>
  );
}