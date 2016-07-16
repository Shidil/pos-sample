import React from 'react';
import ReactDOM from 'react-dom';
import Router from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { useRouterHistory } from 'react-router';

const MOUNT_NODE = document.getElementById('root');
const history = useRouterHistory(createBrowserHistory)({
  basename: ''
});

let render = () => {
  ReactDOM.render(
    <Router history={history}/>,
    MOUNT_NODE
  );
};

render();
