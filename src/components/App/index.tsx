import * as React from 'react';
import { Fragment } from 'react';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { Content } from '../Content';

const App = () => {
  return (
    <Fragment>
      <Header />
      <Content />
      <Footer />
    </Fragment>
  );
};
export default App;
