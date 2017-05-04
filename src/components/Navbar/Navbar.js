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
        <Link to="/sell" className="nav-item logo" />
        <Link to="/sell" className="nav-item material-icons">shopping_cart</Link>
        <Link to="/settings" className="nav-item material-icons">settings</Link>
        <Link to="/logout" className="nav-item material-icons">lock</Link>
        <Link to="/about" className="nav-item material-icons">info</Link>
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
