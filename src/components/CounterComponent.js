import React from 'react';
import {connect} from 'react-redux';
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
  value: React.PropTypes.number.isRequired,
  increment: React.PropTypes.func,
  decrement: React.PropTypes.func

};

let mapStateToProps = (state) => {
  return {
    value: state.counter
  };
};

export const CounterContainer = connect(
  mapStateToProps,
  actionCreators
)(Counter);
