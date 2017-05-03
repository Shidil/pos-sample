import React from 'react';
import PropTypes from 'prop-types';

class LoginComponent extends React.Component {
  render() {
    return (
      <div className="container">
        Login
      </div>
    );
  }
}

LoginComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

export default LoginComponent;
