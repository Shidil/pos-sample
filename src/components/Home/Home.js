import React from 'react';
import { Link, IndexLink } from 'react-router';
import CounterContainer from '../../counter';

class HomeComponent extends React.Component {
  render() {
    return (
      <div>
        <header className="header">
          <nav className="header-nav">
            <IndexLink to="/">Home</IndexLink>
            {' | '}
            <Link to="/login">Login</Link>
            {' | '}
            <Link to="/dead">Dead-Page</Link>
          </nav>
        </header>
        <div className="home-view">
          <h1>Hello World</h1>
          <CounterContainer />
        </div>
        </div>
    );
  }
}

export default HomeComponent;
