import React from 'react';
import { AppShell } from '../components/Starter/AppShell';
import { Home } from '../components/Starter/Home';

export const HomeContainer = () => {
  return (
    <AppShell>
      <Home />
    </AppShell>
  );
};
