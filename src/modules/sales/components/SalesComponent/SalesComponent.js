import React from 'react';
import PropTypes from 'prop-types';
import ProductComponent from '../ProductComponent';
import CartComponent from '../CartComponent';
import './SalesComponent.less';

class SalesComponent extends React.Component {
  componentWillMount() {
    this.props.actions.fetchProducts();
  }

  filterProducts() {
    const term = this.props.searchTerm;
    const mapper = x => x.title.match(new RegExp(term, 'i'));

    return this.props.products.filter(mapper);
  }

  render() {
    const products = this.props.products;
    const productComponents = products.map(product => (
      <ProductComponent data={product} key={product.id}
        addToCart={this.props.actions.addProductToCart} />
    ));

    let searchResults = null;

    if (this.props.searchTerm) {
      searchResults = this.filterProducts().map(product => (
        <div
          className="searchbar-results-item"
          key={product.id}
          onClick={this.props.actions.addProductToCart.bind(null, product)}>
          {product.title}
        </div>

      ));
    }

    return (
      <div className="grid">
        <div className="products">
          <div className="searchbar">
            <input id="input-search" type="text"
              className="form-control"
              onChange={this.props.actions.searchProducts}
              placeholder="Search Products..." />
          </div>
          <div className="searchbar-results">
            {searchResults}
          </div>
          <div className="products-list">
            {productComponents}
          </div>
        </div>
        <CartComponent />
      </div>
    );
  }
}

SalesComponent.propTypes = {
  products: PropTypes.array,
  cart: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
  searchTerm: PropTypes.string
};

SalesComponent.defaultProps = {
  products: [],
  searchTerm: ''
};

export default SalesComponent;
