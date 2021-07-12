import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.css';
import '@fontsource/rubik';
import '@fontsource/rubik/700.css';
import { registerServiceWorker } from './utilities';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { OfflineResults } from './components/OfflineResults';
import { HomeContainer } from './containers/HomeContainer';

// todo (h2): update this condition
if (process.env.NODE_ENV === 'production') {
  registerServiceWorker();
}

// This is where your application content can be mounted
const Root = () => (
  <Router>
    <Switch>
      <Route path='/' exact component={HomeContainer} />
      <Route path='/offline' exact component={OfflineResults} />
    </Switch>
  </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
