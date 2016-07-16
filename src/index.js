import React from 'react';
import ReactDOM from 'react-dom';
import RouterContainer from './routes';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import { useRouterHistory } from 'react-router';

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
