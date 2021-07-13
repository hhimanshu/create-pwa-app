import React from 'react';
import { Content } from '../components/Content';
import AppShell from '../components/AppShell';
import { OfflineResults } from '../components/Starter/OfflineResults';

export const ContentContainer = () => {
  return (
    <AppShell>
      {window.navigator.onLine && <Content />}
      {!window.navigator.onLine && <OfflineResults />}
    </AppShell>
  );
};
