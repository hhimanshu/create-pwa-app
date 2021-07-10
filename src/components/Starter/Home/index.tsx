import React from 'react';
import styles from './home.module.css';
import { GithubCard } from '../GithubCard';

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.githubCard}>
        <GithubCard />
      </div>
      <div className={styles.searchForm}>Search Form</div>
    </div>
  );
};
