import React, { useEffect, useState } from 'react';
import { getCachedGithubUsers } from './fetchFromCache';
import { GithubUser } from '../../../types';
import AppShell from '../AppShell';
import Offline from '../../icons/offline.svg';
import styles from './offlineResults.module.css';

export const OfflineResults = () => {
  const [cachedResponses, setCachedResponses] = useState<GithubUser[]>([]);

  useEffect(() => {
    getCachedGithubUsers().then(users => setCachedResponses(users));
  }, [getCachedGithubUsers, setCachedResponses]);

  return (
    <AppShell>
      <OfflineHeader />
      <div>
        Your Offline results
        {cachedResponses.map(r => {
          return <pre key={r.login}>{r.name}</pre>;
        })}
      </div>
    </AppShell>
  );
};

const OfflineHeader = () => {
  return (
    <div className={styles.offlineHeader}>
      <Offline style={{ height: 40, width: 'auto' }} />

      <p>You are currently offline</p>
      <button
        className={styles.refresh}
        onClick={() => window.location.reload()}
      >
        refresh
      </button>
    </div>
  );
};
