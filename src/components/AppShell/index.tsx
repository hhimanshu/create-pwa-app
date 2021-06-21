import * as React from 'react';
import { Fragment } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

interface AppShellProps {
  children: JSX.Element | JSX.Element[];
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
