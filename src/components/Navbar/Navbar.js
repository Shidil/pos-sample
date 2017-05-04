import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Navbar.less';

class NavbarComponent extends React.Component {
  render() {
    if (!this.props.isLoggedIn) {
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
  isLoggedIn: PropTypes.bool.isRequired
};

const mapStateToProps = state => {
  return {
    isLoggedIn: state.session.loggedIn
  };
};

const Navbar = connect(
  mapStateToProps
)(NavbarComponent);

export default Navbar;
