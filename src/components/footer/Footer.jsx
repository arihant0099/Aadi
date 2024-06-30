import React from 'react';
import styles from "./Footer.module.scss";

const Footer = () => {
    const data = new Date();
    const year = data.getFullYear();
  return (
    <div className={styles.footer}>
      &copy;{year}All Rights Reserved
    </div>
  );
}

export default Footer;
