import React from "react";
import styles from "./Logo.module.scss";
import Logotype from '../../Assets/logo.png';

export const Logo = (props) => {
  return(
    <a href="/" title={props.title} className={styles.Wrapper}>
      <img alt={props.title} src={Logotype} />
    </a>
  );
}
