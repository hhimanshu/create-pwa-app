import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.css';
import '@fontsource/poppins';
import '@fontsource/poppins/900.css';
import AppShell from './components/AppShell';
import { Content } from './components/Content';

// Note: You can enable based on process.env value as well
registerServiceWorker();

// This is where your application content can be mounted
const Root = () => <AppShell children={<Content />} />;
ReactDOM.render(<Root />, document.getElementById('root'));
