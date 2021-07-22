import React from 'react';
import { GithubUser } from '../../../../types';
import styles from './githubCard.module.css';
import { Avatar } from '../Avatar';
import { GithubUserDetails } from '../GithubUserDetails';
import { Stats } from '../Stats';

interface GithubCardProps {
  githubUser: GithubUser;
}

export const GithubCard = ({ githubUser }: GithubCardProps) => {
  if (!githubUser) return <h1>Loading ...</h1>;

  return (
    <div className={styles.githubCardContainer}>
      <div>
        <Avatar
          userName={githubUser.name}
          url={githubUser.avatar_url}
          height={120}
        />
        <GithubUserDetails name={githubUser.name} userName={githubUser.login} />
        <Stats
          numRepos={githubUser.public_repos}
          numFollowers={githubUser.followers}
        />
      </div>
    </div>
  );
};
