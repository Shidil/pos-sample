import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Navbar.less';

class NavbarComponent extends React.Component {
  render() {
    if (this.props.location === '/login') {
      return null;
    }

    return (
      <nav className="sidebar-nav">
        <Link to="/sell" className="nav-item">Sell</Link>
        <Link to="/login" className="nav-item">Logout</Link>
      </nav>
    );
  }
}

NavbarComponent.propTypes = {
  location: PropTypes.string.isRequired
};

const mapStateToProps = state => {
  const location = state.routing.locationBeforeTransitions;
  const pathname = location ? location.pathname : '/login';

  return {
    location: pathname,
    redirectUrl: state.session.redirectUrl
  };
};

const Navbar = connect(
  mapStateToProps
)(NavbarComponent);

export default Navbar;
