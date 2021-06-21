import * as React from 'react';
import { Fragment } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';

interface AppProps {
  children: JSX.Element | JSX.Element[];
}

const App = (props: AppProps) => {
  return (
    <Fragment>
      <Header />
      {props.children}
      <Footer />
    </Fragment>
  );
};
export default App;
