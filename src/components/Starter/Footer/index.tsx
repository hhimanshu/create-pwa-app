import React from 'react';
import VercelIcon from '../../../icons/powered-by-vercel.svg';
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <div className={styles.footerContainer}>
      <VercelIcon />
    </div>
  );
};
