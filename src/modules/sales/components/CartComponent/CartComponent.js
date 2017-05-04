import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';
import './CartComponent.less';

class Cart extends React.Component {
  render() {
    const { items } = this.props.data;
    const { removeFromCart } = this.props.actions;
    const cartItems = this.props.data.items.map((item, i) => (
      <div className="cart-item" key={i}>
        {item.title}
        <button
          className="btn btn-success"
          onClick={removeFromCart.bind(null, i)}>Remove
        </button>
      </div>
    ));

    const totalPrice = items.reduce((s, x) => s + x.price, 0);

    return (
      <div className="cart">
        <div className="cart-items-list">
          {cartItems}
          <div className="cart-calculations">
            total: {totalPrice}
          </div>
        </div>
        <div className="cart-actions">
          <button className="btn btn-success btn-wide" disabled={items.length === 0}>
            Pay {totalPrice}
          </button>
        </div>
      </div>
    );
  }
}

Cart.propTypes = {
  data: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired
};

let mapStateToProps = (state) => {
  return {
    products: state.sales.products,
    cart: state.sales.cart
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

const CartComponent = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cart);

export default CartComponent;
