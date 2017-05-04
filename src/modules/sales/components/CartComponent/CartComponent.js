import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from '../../actions';
import './CartComponent.less';

class Cart extends React.Component {
  render() {
    const { items } = this.props.data;
    const { removeFromCart,
            resetCart, changeSalesNote, parkOrder,
            postOrder } = this.props.actions;
    const cartItems = this.props.data.items.map((item, i) => (
      <li className="cart-item" key={i}>
        <span className="cart-item-quantity">
          1
        </span>
        <span className="cart-item-title">
          {item.title}
        </span>
        <span className="cart-item-price">
          {Number(item.price).toFixed(2)}
        </span>
        <span
          className="fa fa-trash"
          onClick={removeFromCart.bind(null, i)} />
      </li>
    ));

    const subTotal = items.reduce((s, x) => s + x.price, 0);
    const discount = 0;
    const tax = 0;
    const totalPrice = (subTotal - discount) + tax;

    return (
      <div className="cart">
        <div className="grid-header">
          <span className="">Shopping Cart</span>
          <span className="grid-header-action fa fa-trash-o pull-right"
            onClick={resetCart}
          />
          <span className="grid-header-action fa fa-clock-o pull-right"
            onClick={parkOrder}
          />
        </div>
        <div className="cart-items-list">
          <ul>
            {cartItems}
          </ul>
          <div className="cart-calculations">
            <div className="sale-note">
              <textarea placeholder="Add sale note" onBlur={changeSalesNote}/>
            </div>
            <hr />
            <div className="cart-calculation-item">
              <span className="">Sub-total</span>
              <span className="pull-right">{Number(subTotal).toFixed(2)}</span>
            </div>
            <div className="cart-calculation-item">
              <span className="">Discount</span>
              <span className="pull-right">{Number(discount).toFixed(2)}</span>
            </div>
            <div className="cart-calculation-item">
              <span className="">Tax</span>
              <span className="pull-right">{Number(tax).toFixed(2)}</span>
            </div>
            <hr />
            <div className="cart-calculation-item">
              <span className="">Total ({cartItems.length} items)</span>
              <span className="pull-right">{Number(totalPrice).toFixed(2)}</span>
            </div>
          </div>
        </div>
        <div className="cart-actions">
          <button className="btn btn-success btn-wide text-left"
            disabled={items.length === 0}
            onClick={postOrder}>
            <span className="">Pay</span>
            <span className="pull-right">{Number(totalPrice).toFixed(2)}</span>
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
    data: state.sales.cart
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
