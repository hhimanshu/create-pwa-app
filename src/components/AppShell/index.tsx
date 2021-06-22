import * as React from 'react';
import { Fragment, ReactNode } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

interface AppShellProps {
  children: ReactNode;
}

const AppShell = (props: AppShellProps) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};
export default AppShell;
