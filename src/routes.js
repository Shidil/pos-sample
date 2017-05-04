import React from 'react';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';

import AppContainer from './components/AppContainer/';
import AuthGuard from './components/AuthGuard/';
import LoginContainer from './modules/login/login';
import SalesContainer from './modules/sales';
import NotFound from './components/NotFound/';
import DevTools from './store/DevTools';

const routes = (
  <Route path="/" component={AppContainer}>
    <IndexRoute component={LoginContainer} />
    <Route path="login" component={LoginContainer} />
    <Route path="logout" component={LoginContainer} />
    <Route component={AuthGuard}>
      <Route path="sell" component={SalesContainer} />
    </Route>
    <Route path="*" component={NotFound} />
  </Route>
);

class RouterContainer extends React.Component {
  render() {
    return (
      <Provider store={this.props.store}>
        <div>
          <Router history={this.props.history}>
            {routes}
          </Router>
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
