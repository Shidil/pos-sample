import React from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import * as actionCreators from '../redux/action_creators';

export class Counter extends React.Component {
  render() {
    return (
      <div>
        Counter: {this.props.value}
        <br />
        <button onClick={this.props.increment}>Increment</button>
        <button onClick={this.props.decrement}>Decrement</button>
      </div>
    );
  }
}

Counter.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func

};

let mapStateToProps = (state) => {
  return {
    value: state.app.counter
  };
};

export const CounterContainer = connect(
  mapStateToProps,
  actionCreators
)(Counter);
