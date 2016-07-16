import React from 'react';

class HomeComponent extends React.Component {
  constructor(props, context) {
    super(props);
    this.props = props;
    this.context = context;
  }

  render() {
    return (
      <div className="home-view">
        <h1>Hello World</h1>
      </div>
    );
  }
}

export default HomeComponent;
