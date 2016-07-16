import React from 'react';

class AboutComponent extends React.Component {
  constructor(props, context) {
    super(props);
    this.props = props;
    this.context = context;
  }

  render() {
    return (
      <div className="about-view">
        <h1>About us</h1>
      </div>
    );
  }
}

export default AboutComponent;
