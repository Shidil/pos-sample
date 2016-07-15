import React from 'react';
import ReactDOM from 'react-dom';
import AppContainer from './components/AppContainer';

const MOUNT_NODE = document.getElementById('root');

let render = () => {
  ReactDOM.render(
    <AppContainer/>,
    MOUNT_NODE
  );
};

render();
