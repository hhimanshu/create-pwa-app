import { GithubUser } from '../../../../types';
import styles from './offlineUser.module.css';
import React from 'react';
import { Avatar } from '../Avatar';

interface DisplayGithubUserProps {
  user: GithubUser;
}

export const DisplayOfflineGithubUser = ({ user }: DisplayGithubUserProps) => {
  return (
    <div className={styles.githubUserContainer}>
      <div className={styles.offlineAvatar}>
        <Avatar userName={user.name} url={user.avatar_url} height={86} />
      </div>
      <div className={styles.offlineGithubUserContainer}>
        <h3>{user.name}</h3>
        <p>{`@${user.login}`}</p>
        <div className={styles.offlineStats}>
          <OfflineStat stat={user.public_repos} label={'repos'} />
          <OfflineStat stat={user.followers} label={'followers'} />
        </div>
      </div>
    </div>
  );
};

interface OfflineStatProps {
  stat: number;
  label: string;
}

const OfflineStat = ({ stat, label }: OfflineStatProps) => {
  return (
    <div className={styles.offlineStat}>
      <h3>{stat}</h3>
      <p>{label}</p>
    </div>
  );
};
