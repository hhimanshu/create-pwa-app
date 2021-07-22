import React from 'react';
import styles from './header.module.css';
import MenuIcon from '../../../icons/menu.svg';
import LogoIcon from '../../../icons/logo.svg';
import { useHistory } from 'react-router-dom';

export const Header = () => {
  return (
    <header className={styles.header}>
      <Menu />
      <Logo />
    </header>
  );
};

const Menu = () => {
  const history = useHistory();
  return (
    <div
      className={styles.menuContainer}
      onClick={() => history.push('/about')}
    >
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
