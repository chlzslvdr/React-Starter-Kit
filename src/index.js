import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import AppRoot from './appRoot/index';
import './css/main.scss';

ReactDOM.render(
  <React.StrictMode>
    <AppRoot />
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
