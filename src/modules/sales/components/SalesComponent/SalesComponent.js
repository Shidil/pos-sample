import React from 'react';
import PropTypes from 'prop-types';
import ProductComponent from '../ProductComponent';
import CartComponent from '../CartComponent';
import './SalesComponent.less';

class SalesComponent extends React.Component {
  componentWillMount() {
    this.props.actions.fetchProducts();
  }

  render() {
    return (
      <div className="grid">
        <div className="products">
          <div className="searchbar">
            <input id="input-search" type="text"
              className="form-control"
              placeholder="Search Products..." />
          </div>
          <div className="products-list">
            {
              this.props.products.map(product => (
                <ProductComponent data={product} key={product.id}
                  addToCart={this.props.actions.addProductToCart} />
              ))
            }
          </div>
        </div>
        <CartComponent data={this.props.cart} />
      </div>
    );
  }
}

SalesComponent.propTypes = {
  products: PropTypes.array,
  cart: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

SalesComponent.defaultProps = {
  products: []
};

export default SalesComponent;
