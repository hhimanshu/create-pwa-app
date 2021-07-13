import { GithubUser } from '../../../../types';
import React from 'react';
import { DisplayOfflineGithubUser } from '../../DisplayOfflineGithubUser';

interface CachedGithubUsersProps {
  users: GithubUser[];
}
export const ListCachedGithubUsers = ({ users }: CachedGithubUsersProps) => {
  return (
    <div>
      {users.map(user => (
        <div key={user.login}>
          <DisplayOfflineGithubUser key={user.login} user={user} />
        </div>
      ))}
    </div>
  );
};
