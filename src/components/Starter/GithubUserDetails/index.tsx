import React from 'react';
import styles from './userDetails.module.css';
import { FollowButton } from '../FollowButton';

interface GithubUserDetailsProps {
  name: string;
  userName: string;
}

export const GithubUserDetails = ({
  name,
  userName,
}: GithubUserDetailsProps) => (
  <div className={styles.userDetailsContainer}>
    <div className={styles.userDetails}>
      <h1>{name}</h1>
      <p>@{userName}</p>
      <div className={styles.followButton}>
        <FollowButton userName={userName} />
      </div>
    </div>
  </div>
);
