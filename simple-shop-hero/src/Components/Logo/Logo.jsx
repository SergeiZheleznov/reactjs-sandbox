import React from "react";
import styles from "./Logo.module.scss";
import Logotype from '../../Assets/logo.png';

export const Logo = () => {
  return(
    <a href="/" className={styles.Wrapper}>
      <img alt="Logo" src={Logotype} />
    </a>
  );
}
