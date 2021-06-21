import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.css';
import '@fontsource/poppins';
import '@fontsource/poppins/900.css';
import App from './components/App';
import { Content } from './components/Content';

const Root = () => <App children={<Content />} />;

ReactDOM.render(<Root />, document.getElementById('root'));
