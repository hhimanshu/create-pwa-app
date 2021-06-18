import * as React from 'react';
import { Fragment } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

const App = () => {
  return (
    <Fragment>
      <Header />
      <h1>
        Hello React in TypeScript + Jest + React Testing Library + Storybook
      </h1>
      <Footer />
    </Fragment>
  );
};
export default App;
