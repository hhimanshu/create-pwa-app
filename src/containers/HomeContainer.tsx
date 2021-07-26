import React from 'react';
import { AppShell } from '../components/Starter/AppShell';
import { OfflineResults } from '../components/Starter/OfflineResults';
import { Home } from '../components/Starter/Home';

export const HomeContainer = () => {
  return (
    <AppShell>
      {window.navigator.onLine && <Home />}
      {!window.navigator.onLine && <OfflineResults />}
    </AppShell>
  );
};
