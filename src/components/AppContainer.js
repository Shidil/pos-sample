import React from 'react';

class AppContainer extends React.Component {
  constructor(props, context) {
    super(props);
    this.props = props;
    this.context = context;
  }

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
