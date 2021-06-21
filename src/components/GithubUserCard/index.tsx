import React, { Fragment, useEffect, useState } from 'react';
import styles from './githubUserCard.module.css';

export const GithubUserCard = () => {
  const [githubUser, setGithubUser] = useState<GitHubUser | undefined>(
    undefined
  );
  useEffect(() => {
    fetch('https://api.github.com/users/hhimanshu')
      .then(r => r.json())
      .then((user: GitHubUser) => {
        setGithubUser(user);
      });
  }, [setGithubUser]);

  return (
    <div className={styles.cardContainer}>
      <div className={styles.card}>
        {!githubUser && <h1>Loading ...</h1>}
        {githubUser && (
          <Fragment>
            <Avatar userName={githubUser.name} url={githubUser.avatar_url} />
            <GithubUserDetails
              name={githubUser.name}
              userName={githubUser.login}
            />
            <Stats
              numRepos={githubUser.public_repos}
              numFollowers={githubUser.followers}
            />
          </Fragment>
        )}
      </div>
    </div>
  );
};

interface AvatarProps {
  userName: string;
  url: string;
}

const Avatar = ({ userName, url }: AvatarProps) => (
  <div className={styles.avatar}>
    <img alt={userName} src={url} />
  </div>
);

interface GithubUserDetailsProps {
  name: string;
  userName: string;
}

const GithubUserDetails = ({ name, userName }: GithubUserDetailsProps) => (
  <div className={styles.userDetailsContainer}>
    <div className={styles.userDetails}>
      <h1>{name}</h1>
      <h3>@{userName}</h3>
    </div>
  </div>
);

interface NumericInformationProps {
  value: number;
  label: string;
}

const NumericInformation = ({ value, label }: NumericInformationProps) => (
  <div className={styles.numericContainer}>
    <h3>{value}</h3>
    <p>{label}</p>
  </div>
);

interface StatsProps {
  numRepos: number;
  numFollowers: number;
}

const Stats = ({ numRepos, numFollowers }: StatsProps) => (
  <div className={styles.statsContainer}>
    <NumericInformation value={numRepos} label={'Public Repos'} />
    <NumericInformation value={numFollowers} label={'Followers'} />
  </div>
);
