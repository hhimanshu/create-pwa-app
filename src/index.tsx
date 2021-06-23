import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.css';
import '@fontsource/poppins';
import '@fontsource/poppins/900.css';
import { registerServiceWorker } from './utilities';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ContentContainer } from './containers/ContentContainer';
import { EmptyCard } from './components/EmptyCard';

if (process.env.NODE_ENV === 'production') {
  registerServiceWorker();
}

// This is where your application content can be mounted
const Root = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={ContentContainer} />
      <Route path='/offline' exact component={EmptyCard} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
