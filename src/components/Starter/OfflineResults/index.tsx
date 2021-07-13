import React, { useEffect, useState } from 'react';
import { getCachedGithubUsers } from './fetchFromCache';
import { GithubUser } from '../../../../types';
import Offline from '../../../icons/offline.svg';
import styles from './offlineResults.module.css';
import { ListCachedGithubUsers } from '../ListCachedGithubUsers';
import { AppShell } from '../AppShell';

export const OfflineResults = () => {
  const [cachedResponses, setCachedResponses] = useState<GithubUser[]>([]);

  useEffect(() => {
    getCachedGithubUsers().then(users => setCachedResponses(users));
  }, [getCachedGithubUsers, setCachedResponses]);

  return (
    <AppShell>
      <div className={styles.offlineResults}>
        <OfflineHeader />
        <h3>Your Past Searches</h3>
        <div className={styles.offlineResultsContainer}>
          <ListCachedGithubUsers users={cachedResponses} />
        </div>
      </div>
    </AppShell>
  );
};

const OfflineHeader = () => {
  return (
    <div className={styles.offlineHeader}>
      <Offline style={{ height: 40, width: 'auto', marginRight: '3%' }} />
      <p>You are currently offline</p>
      <button
        className={styles.refresh}
        onClick={() => window.location.reload()}
      >
        Refresh
      </button>
    </div>
  );
};
