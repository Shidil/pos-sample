import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions';
import LoginComponent from './components/LoginComponent';

let mapStateToProps = (state) => {
  return {
    isLoggedIn: state.session.loggedIn
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginComponent);

export default LoginContainer;
