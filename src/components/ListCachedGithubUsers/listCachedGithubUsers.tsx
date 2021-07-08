import { GithubUser } from '../../../types';
import React from 'react';
import styles from './cachedUsers.module.css'

interface CachedGithubUsersProps {
  users: GithubUser[]
}
export const ListCachedGithubUsers = ({users}: CachedGithubUsersProps) => {
  return <div className={styles.resultsContainer}>
    <h3>Your Past Searches</h3>
    <div>{users.map(user => <DisplayOfflineGithubUser user={user}/>)}</div>
  </div>
}

interface DisplayGithubUserProps {
  user: GithubUser
}
const DisplayOfflineGithubUser = ({user}: DisplayGithubUserProps) => {
  return <div className={styles.githubUserContainer}>
    <p>{user.name}</p>
    <p>{user.login}</p>
  </div>
} 
