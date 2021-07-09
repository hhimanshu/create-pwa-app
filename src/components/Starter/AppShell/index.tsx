import React, { ReactNode } from 'react';
import { Header } from '../Header';

interface AppShellProps {
  children: ReactNode | ReactNode[];
}

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <div>
      <Header />
      <body>{children}</body>
    </div>
  );
};
