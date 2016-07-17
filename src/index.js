import React from 'react';
import ReactDOM from 'react-dom';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { useRouterHistory } from 'react-router';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import RouterContainer from './routes';
import styles from './styles/base.less'; // eslint-disable-line no-unused-vars
import reducer from './redux/reducer';

const MOUNT_NODE = document.getElementById('root');

// setup custom history
const history = useRouterHistory(createBrowserHistory)({
  basename: ''
});

// setup redux
const store = createStore(reducer);

let render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <RouterContainer history={history}/>
    </Provider>,
    MOUNT_NODE
  );
};

render();
