import React from 'react';
import styles from './AppContainer.less'; // eslint-disable-line no-unused-vars

class AppContainer extends React.Component {
  render() {
    return (
      <div className="main-view">
        {this.props.children}
      </div>
    );
  }
}

AppContainer.propTypes = {
  children: React.PropTypes.object
};

export default AppContainer;
