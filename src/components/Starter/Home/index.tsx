import React, { useEffect, useState } from 'react';
import styles from './home.module.css';
import { GithubCard } from '../GithubCard';
import { SearchForm } from '../SearchForm';
import { GithubUser } from '../../../../types';

export const Home = () => {
  const [githubUser, setGithubUser] = useState<GithubUser | undefined>(
    undefined
  );
  const [formUser, setFormUser] = useState<string | undefined>(undefined);
  const fetchUser = (userName: string) =>
    fetch(`https://api.github.com/users/${userName}`)
      .then(r => {
        if (r.status !== 200) throw 'no user found!';
        return r.json();
      })
      .then((user: GithubUser) => setGithubUser(user))
      .catch(err => console.error('Error', err));

  useEffect(() => {
    fetchUser('hhimanshu');
  }, [setGithubUser]);

  useEffect(() => {
    fetchUser(formUser);
  }, [formUser]);
  return (
    <div className={styles.homeContainer}>
      <div className={styles.githubCardParentContainer}>
        <GithubCard githubUser={githubUser} />
      </div>
      <SearchForm onSubmit={userName => setFormUser(userName)} />
    </div>
  );
};
