import React from 'react';
import { AppShell } from '../components/Starter/AppShell';
import { Home } from '../components/Starter/Home';
import { OfflineResults } from '../components/Starter/OfflineResults';

export const HomeContainer = () => {
  return (
    <AppShell>
      {window.navigator.onLine && <Home />}
      {!window.navigator.onLine && <OfflineResults />}
    </AppShell>
  );
};
