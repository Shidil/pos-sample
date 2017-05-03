import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actionCreators from './actions';
import styles from './AppContainer.less'; // eslint-disable-line no-unused-vars

class App extends React.Component {
  componentDidUpdate(prevProps) {
    const { redirectUrl } = this.props;
    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;

    if (isLoggingIn) {
      this.props.actions.navigate(redirectUrl);
      this.context.router.replace(redirectUrl);
    } else if (isLoggingOut) {
      this.context.router.replace('/login');
    }
  }

  render() {
    return (
      <div className="">
        {this.props.children}
      </div>
    );
  }
}

App.propTypes = {
  children: PropTypes.element.isRequired,
  actions: PropTypes.object.isRequired,
  redirectUrl: PropTypes.string,
  isLoggedIn: PropTypes.bool.isRequired,
  history: PropTypes.object.isRequired
};

App.contextTypes = {
  router: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  isLoggedIn: state.session.loggedIn,
  redirectUrl: state.session.redirectUrl
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App);

export default AppContainer;
