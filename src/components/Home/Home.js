import React from 'react';
import CounterContainer from '../../counter';

class HomeComponent extends React.Component {
  render() {
    return (
      <div className="home-view">
        <h1>Hello World</h1>
        <CounterContainer />
      </div>
    );
  }
}

export default HomeComponent;
