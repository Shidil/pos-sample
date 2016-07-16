import React from 'react';
import ReactDOM from 'react-dom';
import RouterContainer from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { useRouterHistory } from 'react-router';
import styles from './styles/base.less'; // eslint-disable-line no-unused-vars

const MOUNT_NODE = document.getElementById('root');
const history = useRouterHistory(createBrowserHistory)({
  basename: ''
});

let render = () => {
  ReactDOM.render(
    <RouterContainer history={history}/>,
    MOUNT_NODE
  );
};

render();
