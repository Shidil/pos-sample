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
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default AppContainer;
