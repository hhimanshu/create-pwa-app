import { GithubUser } from '../../../../types';
import React from 'react';
import { DisplayOfflineGithubUser } from '../DisplayOfflineGithubUser';
import styles from './cached.module.css';

interface CachedGithubUsersProps {
  users: GithubUser[];
}
export const ListCachedGithubUsers = ({ users }: CachedGithubUsersProps) => {
  return (
    <div>
      {users.map(user => (
        <div key={user.login} className={styles.cachedUsers}>
          <DisplayOfflineGithubUser key={user.login} user={user} />
        </div>
      ))}
    </div>
  );
};
