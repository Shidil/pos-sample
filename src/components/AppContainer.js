import React from 'react';
import { Link, IndexLink } from 'react-router';
import PropTypes from 'prop-types';
import styles from './AppContainer.less'; // eslint-disable-line no-unused-vars

class AppContainer extends React.Component {
  render() {
    return (
      <div className="main-view">
        <header className="header">
          <nav className="header-nav">
            <IndexLink to="/">Home</IndexLink>
            {' | '}
            <Link to="/about">About</Link>
            {' | '}
            <Link to="/dead">Dead-Page</Link>
          </nav>
        </header>
        {this.props.children}
      </div>
    );
  }
}

AppContainer.propTypes = {
  children: PropTypes.element.isRequired
};

export default AppContainer;
