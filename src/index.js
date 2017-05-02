import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Redbox from 'redbox-react';
import { AppContainer } from 'react-hot-loader';

import RouterContainer from './routes';
import styles from './styles/base.less'; // eslint-disable-line no-unused-vars

import configureStore from './store';
const MOUNT_NODE = document.getElementById('root');

// setup redux
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

let render = () => {
  ReactDOM.render(
    <AppContainer errorReporter={Redbox}>
      <RouterContainer store={store} history={history}/>
    </AppContainer>,
    MOUNT_NODE
  );
};

render();
