import React, { useEffect, useState } from 'react';
import styles from './home.module.css';
import { GithubCard } from '../GithubCard';
import { SearchForm } from '../SearchForm';
import { GithubUser } from '../../../../types';
import { Error } from '../Error';

export const Home = () => {
  const [githubUser, setGithubUser] = useState<GithubUser | undefined>(
    undefined
  );
  const [formUser, setFormUser] = useState<string>('hhimanshu');
  const [showError, setShowError] = useState<boolean>(false);

  const fetchUser = (userName: string) => {
    fetch(`https://api.github.com/users/${userName}`)
      .then(r => {
        if (r.status !== 200) throw 'no user found!';
        return r.json();
      })
      .then((user: GithubUser) => setGithubUser(user))
      .catch(_ => setShowError(true));
  };

  useEffect(() => {
    if (formUser) fetchUser(formUser);
  }, [formUser]);

  useEffect(() => {
    const handler = setTimeout(_ => setShowError(false), 5000);
    return () => clearTimeout(handler);
  }, [showError]);

  return (
    <>
      <div className={styles.homeContainer}>
        <div className={styles.githubCardParentContainer}>
          <GithubCard githubUser={githubUser} />
        </div>
        <SearchForm onSubmit={userName => setFormUser(userName)} />
      </div>
      <div className={styles.error}>
        {showError && <Error userName={formUser} />}
      </div>
    </>
  );
};
