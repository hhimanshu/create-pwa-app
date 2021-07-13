import React from 'react';
import styles from './follow.module.css';
import GithubIcon from '../../../icons/github.svg';

interface FollowButtonProps {
  userName: string;
}

export const FollowButton = ({ userName }: FollowButtonProps) => {
  const onClick = () => window.open(`https://github.com/${userName}`, '_blank');
  return (
    <div className={styles.follow} onClick={onClick}>
      <GithubIcon />
      <p>Follow</p>
    </div>
  );
};
