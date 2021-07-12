import React, { useEffect, useState } from 'react';
import { GithubUser } from '../../../../types';
import styles from './githubCard.module.css';
import { Avatar } from '../Avatar';
import { GithubUserDetails } from '../GithubUserDetails';
import { Stats } from '../Stats';

export const GithubCard = () => {
  const [githubUser, setGithubUser] = useState<GithubUser | undefined>(
    undefined
  );
  useEffect(() => {
    fetch('https://api.github.com/users/hhimanshu')
      .then(r => r.json())
      .then((user: GithubUser) => {
        setGithubUser(user);
      });
  }, [setGithubUser]);

  if (!githubUser) return <h1>Loading ...</h1>;

  return (
    <div className={styles.githubCardContainer}>
      <div>
        <Avatar
          userName={githubUser.name}
          url={githubUser.avatar_url}
          height={150}
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
