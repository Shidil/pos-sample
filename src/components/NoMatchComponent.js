import React from 'react';

class NoMatchComponent extends React.Component {
  constructor(props, context) {
    super(props);
    this.props = props;
    this.context = context;
  }

  render() {
    return (
      <div className="404-view">
        <h1>Not Found</h1>
      </div>
    );
  }
}

export default NoMatchComponent;
