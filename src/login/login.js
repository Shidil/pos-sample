import {connect} from 'react-redux';
import * as actionCreators from './actions';
import LoginComponent from './components/LoginComponent';

let mapStateToProps = (state) => {
  return {
    isLoggedIn: state.session.loggedIn
  };
};

const LoginContainer = connect(
  mapStateToProps,
  actionCreators
)(LoginComponent);

export default LoginContainer;
