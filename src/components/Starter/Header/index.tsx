import React from 'react';
import styles from './header.module.css';
import MenuIcon from '../../../icons/menu.svg';
import LogoIcon from '../../../icons/logo.svg';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Menu />
      <Logo />
    </header>
  );
};

const Menu = () => {
  return (
    <div className={styles.menuContainer}>
      <MenuIcon />
    </div>
  );
};

const Logo = () => {
  return (
    <div className={styles.logoContainer}>
      <div className={styles.logo}>
        <LogoIcon style={{ border: '0px solid black' }} />
        <h3>PWA Starter</h3>
      </div>
    </div>
  );
};
