import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import './Navbar.less';

class NavbarComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuVisible: false
    };
    this.showMenu = this.showMenu.bind(this);
  }

  showMenu() {
    this.setState({
      menuVisible: !this.state.menuVisible
    });
  }

  render() {
    if (!this.props.isLoggedIn) {
      return null;
    }

    const sidebarClassList = `navbar-sidebar ${this.state.menuVisible ? '' : 'hidden'}`;

    return (
      <div>
        <header className="navbar-header">
          <button className="fa fa-bars pull-left" onClick={this.showMenu}/>
          <Link to="/sell" className="header-logo">Till</Link>
        </header>
        <nav className={sidebarClassList}>
          <Link to="/sell" className="nav-item logo" />
          <Link to="/sell" className="nav-item">
            <i className="material-icons">shopping_cart</i>
            <span className="nav-item-title">Sell</span>
          </Link>
          <Link to="/settings" className="nav-item">
            <i className="material-icons">settings</i>
            <span className="nav-item-title">Settings</span>
          </Link>
          <Link to="/logout" className="nav-item">
            <i className="material-icons">lock</i>
            <span className="nav-item-title">Logout</span>
          </Link>
          <Link to="/about" className="nav-item">
            <i className="material-icons">info</i>
            <span className="nav-item-title">About</span>
          </Link>
        </nav>
      </div>
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
