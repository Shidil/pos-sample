import React from 'react';
import PropTypes from 'prop-types';

import './LoginComponent.less';

class LoginComponent extends React.Component {

  constructor(props) {
    super(props);

    this.loginUser = this.loginUser.bind(this);
  }

  loginUser() {
    const username = this.refs.username.value;
    const password = this.refs.password.value;

    this.props.actions.loginUser(username, password);
  }

  render() {
    return (
      <div id="login">
        <div className="centered-xy login-container">
          <div className="logo" />
          <div className="text-center" >
            <div className="form-group">
              <input type="text"
                className="input-flat form-control"
                id="usr" placeholder="Username" ref="username" />
            </div>
            <div className="form-group">
              <input type="password"
              className="form-control input-flat"
              id="pwd" placeholder="Password" ref="password" />
            </div>
            <div className="error-message">
              {this.props.errorMessage}
            </div>
            <div className="form-group">
              <input type="button"
              className="btn btn-success btn-wide"
              value="Login" onClick={this.loginUser} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

LoginComponent.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
  errorMessage: PropTypes.string,
  actions: PropTypes.object.isRequired
};

LoginComponent.defaultProps = {
  errorMessage: ''
};

export default LoginComponent;
