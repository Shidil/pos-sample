import React from 'react';
import PropTypes from 'prop-types';
import './ProductComponent.less';

class ProductComponent extends React.Component {
  render() {
    return (
      <div className="product-item" onClick={this.props.addToCart.bind(null, this.props.data)}>
        <span className="product-title">{this.props.data.title}</span>
      </div>
    );
  }
}

ProductComponent.propTypes = {
  data: PropTypes.object.isRequired,
  addToCart: PropTypes.func.isRequired
};

export default ProductComponent;
