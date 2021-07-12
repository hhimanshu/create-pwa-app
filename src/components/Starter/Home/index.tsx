import React from 'react';
import styles from './home.module.css';
import { GithubCard } from '../GithubCard';
import { SearchForm } from '../SearchForm';

export const Home = () => {
  return (
    <div className={styles.homeContainer}>
      <div className={styles.githubCardParentContainer}>
        <GithubCard />
      </div>
      <SearchForm onSubmit={userName => console.log(`searching ${userName}`)} />
    </div>
  );
};
