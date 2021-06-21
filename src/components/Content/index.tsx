import React from 'react';
import styles from './content.module.css';
import { GithubUserCard } from '../GithubUserCard';

export const Content = () => {
  return (
    <div className={styles.content}>
      <GithubUserCard />
    </div>
  );
};
