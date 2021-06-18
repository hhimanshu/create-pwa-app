import React from 'react';
import styles from './header.module.css';
import Home from '../../icons/home.svg';

export const Header = () => (
  <div className={styles.header}>
    <Home/>
    <Title/>
  </div>
);

const Title = () => (
  <span className={styles.headerTitle}>
    React PWA Starter
  </span>
)

