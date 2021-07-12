import React, { Fragment, ReactNode } from 'react';
import { Header } from '../Header';

interface AppShellProps {
  children: ReactNode | ReactNode[];
}

export const AppShell = ({ children }: AppShellProps) => {
  return (
    <Fragment>
      <Header />
      <div>{children}</div>
    </Fragment>
  );
};
