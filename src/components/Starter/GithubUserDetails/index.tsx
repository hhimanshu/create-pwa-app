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
      <h2>{name}</h2>
      <p>@{userName}</p>
      <div className={styles.followButton}>
        <FollowButton userOrRepo={userName} />
      </div>
    </div>
  </div>
);
