import React from 'react';
import { Provider } from 'react-redux';
import { Router } from 'react-router';

import AppContainer from './components/AppContainer/';
import Home from './components/Home/';
import About from './components/About/';
import NotFound from './components/NotFound/';
import DevTools from './store/DevTools';

const routes = {
  path: '/',
  component: AppContainer,
  indexRoute: {
    name: 'index',
    component: Home
  },
  childRoutes: [
    {
      path: '/about',
      component: About
    },
    {
      path: '*',
      component: NotFound
    }
  ]
};

class RouterContainer extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <Router history={this.props.history} routes={routes} />
          {!window.devToolsExtension ? <DevTools /> : null}
        </div>
      </Provider>
    );
  }
}

RouterContainer.propTypes = {
  history: React.PropTypes.object.isRequired,
  store: React.PropTypes.object.isRequired
};

export default RouterContainer;
