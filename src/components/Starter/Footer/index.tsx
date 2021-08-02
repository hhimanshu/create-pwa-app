import React from 'react';
import VercelIcon from '../../../icons/powered-by-vercel.svg';
import styles from './footer.module.css';

export const Footer = () => {
  return (
    <a
      className={styles.footerContainer}
      href='https://vercel.com/?utm_source=bonsaiilabs&utm_campaign=oss'
      target={'_blank'}
    >
      <VercelIcon />
    </a>
  );
};
