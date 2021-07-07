import React from 'react';
import { Content } from '../components/Content';
import AppShell from '../components/AppShell';
import { OfflineResults } from '../components/OfflineResults';

export const ContentContainer = () => {
  return (
    <AppShell>
      <Content />
      {!window.navigator.onLine && <OfflineResults />}
    </AppShell>
  );
};
