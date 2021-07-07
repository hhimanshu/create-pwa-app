import React, { useEffect, useState } from 'react';
import { getCachedGithubUsers } from './fetchFromCache';
import { GithubUser } from '../../../types';

export const OfflineResults = () => {
  const [cachedResponses, setCachedResponses] = useState<GithubUser[]>([]);

  useEffect(() => {
    getCachedGithubUsers().then(users => setCachedResponses(users))
  }, [getCachedGithubUsers, setCachedResponses]);

  return (
    <div>
      Your Offline results
      {cachedResponses.map(r => {
        return <pre key={r.login}>{JSON.stringify(r)}</pre>
      })}
    </div>
  );
};