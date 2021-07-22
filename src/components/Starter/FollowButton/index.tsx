import React from 'react';
import styles from './follow.module.css';
import GithubIcon from '../../../icons/github.svg';

interface FollowButtonProps {
  userOrRepo: string;
  label?: string;
}

export const FollowButton = ({
  userOrRepo,
  label = 'Follow',
}: FollowButtonProps) => {
  const onClick = () =>
    window.open(`https://github.com/${userOrRepo}`, '_blank');
  return (
    <div className={styles.follow} onClick={onClick}>
      <GithubIcon />
      <p>{label}</p>
    </div>
  );
};
