import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';

import Redbox from 'redbox-react';
import { AppContainer } from 'react-hot-loader';

import RouterContainer from './routes';

import configureStore from './store/createStore';
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

if (module.hot) {
  /**
   * Warning from React Router, caused by react-hot-loader.
   * The warning can be safely ignored, so filter it from the console.
   * Otherwise you'll see it every time something changes.
   * See https://github.com/gaearon/react-hot-loader/issues/298
   */
  const orgError = console.error; // eslint-disable-line no-console
  console.error = (message) => { // eslint-disable-line no-console
    if (message && message.indexOf('You cannot change <Router routes>;') === -1) {
    // Log the error as normally
      orgError.apply(console, [message]);
    }
  };

  module.hot.accept('./routes', () => {
    // If you use Webpack 2 in ES modules mode, you can
    // use <App /> here rather than require() a <NextApp />.
    const NextApp = require('./routes').default;

    ReactDOM.render(
      <AppContainer errorReporter={Redbox}>
        <NextApp store={store} history={history} />
      </AppContainer>,
      MOUNT_NODE
    );
  });
}

