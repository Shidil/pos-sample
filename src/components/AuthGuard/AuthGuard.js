import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import * as actionCreators from './actions';

class AuthGuard extends React.Component {
  componentDidMount() {
    const { isLoggedIn, currentURL, actions } = this.props;

    if (!isLoggedIn) {
      actions.setRedirectUrl(currentURL);
      this.context.router.replace('/login');
    }
  }

  render() {
    if (this.props.isLoggedIn) {
      return this.props.children;
    }

    return null;
  }
}

AuthGuard.propTypes = {
  isLoggedIn: PropTypes.bool,
  children: PropTypes.object,
  currentURL: PropTypes.string.isRequired,
  history: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

AuthGuard.contextTypes = {
  router: PropTypes.object.isRequired
};


// Grab a reference to the current URL. If this is a web app and you are
// using React Router, you can use `ownProps` to find the URL. Other
// platforms (Native) or routing libraries have similar ways to find
// the current position in the app.
function mapStateToProps(state, ownProps) {
  return {
    isLoggedIn: state.session.loggedIn,
    currentURL: ownProps.location.pathname
  };
}

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthGuard);
