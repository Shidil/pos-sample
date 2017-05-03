import React from 'react';
import PropTypes from 'prop-types';
import ProductComponent from '../ProductComponent';

class SalesComponent extends React.Component {
  render() {
    return (
      <div>
        {
          this.props.products.map(product => (
            <ProductComponent data={product} />
          ))
        }
      </div>
    );
  }
}

SalesComponent.propTypes = {
  products: PropTypes.array
};

SalesComponent.defaultProps = {
  products: []
};

export default SalesComponent;
