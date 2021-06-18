import React from 'react';
import styles from './footer.module.css';
import LinkIcon from '../../icons/export.svg';

export const Footer = () => (
  <div className={styles.footer}>
    <FooterCaption />
    <ExternalLink />
  </div>
);

const FooterCaption = () => (
  <span className={styles.footerCaption}>100% open-source</span>
);

const ExternalLink = () => (
  <a target='_blank' href='https://github.com/hhimanshu/react-pwa-starter'><LinkIcon /></a>
);