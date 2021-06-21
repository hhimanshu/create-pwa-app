import * as React from 'react';
import * as ReactDOM from 'react-dom';
import './styles.css';
import '@fontsource/poppins';
import '@fontsource/poppins/900.css';
import AppShell from './components/AppShell';
import { Content } from './components/Content';

// This is where your application content can be mounted
const Root = () => <AppShell children={<Content />} />;

ReactDOM.render(<Root />, document.getElementById('root'));
