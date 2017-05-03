import React from 'react';
import PropTypes from 'prop-types';

class CounterComponent extends React.Component {
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

CounterComponent.propTypes = {
  value: PropTypes.number.isRequired,
  increment: PropTypes.func,
  decrement: PropTypes.func

};

export default CounterComponent;
