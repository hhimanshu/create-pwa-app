import React from 'react';
import styles from './stats.module.css';

interface StatProps {
  value: number;
  label: string;
}

export const Stat = ({ value, label }: StatProps) => (
  <div className={styles.numericContainer}>
    <h4>{value}</h4>
    <p>{label}</p>
  </div>
);

interface StatsProps {
  numRepos: number;
  numFollowers: number;
}

export const Stats = ({ numRepos, numFollowers }: StatsProps) => (
  <div className={styles.statsContainer}>
    <Stat value={numRepos} label={'Public Repos'} />
    <Stat value={numFollowers} label={'Followers'} />
  </div>
);
