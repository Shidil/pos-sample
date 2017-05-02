import {connect} from 'react-redux';
import * as actionCreators from './actions';
import CounterComponent from './components/CounterComponent';

let mapStateToProps = (state) => {
  return {
    value: state.counter.counter
  };
};

const CounterContainer = connect(
  mapStateToProps,
  actionCreators
)(CounterComponent);

export default CounterContainer;
