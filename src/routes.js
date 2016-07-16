import React from 'react';
import { IndexRoute, Router, Route } from 'react-router';
import AppContainer from './components/AppContainer';
import HomeComponent from './components/HomeComponent';
import AboutComponent from './components/AboutComponent';
import NoMatchComponent from './components/NoMatchComponent';

class RouterContainer extends React.Component {
  constructor(props, context) {
    super(props);
    this.props = this.props;
    this.context = context;
  }

  render() {
    return (
       <Router history={this.props.history}>
          <Route name="root" path="/" component={AppContainer}>
            <IndexRoute name="index" component={HomeComponent} />
            <Route name="about" path="about" component={AboutComponent}/>
            <Route path="*" component={NoMatchComponent}/>
          </Route>
      </Router>
    );
  }
}

RouterContainer.propTypes = {
  history: React.PropTypes.object.isRequired
};

export default RouterContainer;
