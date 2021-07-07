import React from 'react';
import { Content } from '../components/Content';
import AppShell from '../components/AppShell';

export const ContentContainer = () => {
  return (
    <AppShell>
      <Content />
      {!window.navigator.onLine && <p>You are offline</p>}
    </AppShell>
  );
};
