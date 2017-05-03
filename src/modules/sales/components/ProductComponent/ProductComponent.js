import React from 'react';
import PropTypes from 'prop-types';

class ProductComponent extends React.Component {
  render() {
    return (
      <div className="product-item">
        <span className="product-title">{this.props.data.title}</span>
      </div>
    );
  }
}

ProductComponent.propTypes = {
  data: PropTypes.object.isRequired
};

export default ProductComponent;
