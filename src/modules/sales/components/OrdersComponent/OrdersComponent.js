import React from 'react';
import PropTypes from 'prop-types';
import './OrdersComponent.less';

class OrdersComponent extends React.Component {
  componentWillMount() {
    // this.props.actions.fetchProducts();
  }

  render() {
    const orderItems = this.props.orders.map(order => (
      <div className="order-item">
        <span className="order-item-quantity">
          {order.items.length}
        </span>
        <span className="order-item-date">
          {order.date}
        </span>
        <span className="order-item-price">
          {Number(order.price).toFixed(2)}
        </span>
        <span className="order-item-note">
          {order.saleNote}
        </span>
        <span className="order-item-status">
          {order.status}
        </span>
      </div>
    ));
    return (
      <div className="grid">
        <div className="orders">
          <div className="grid-header">
            <span className="">Sales History</span>
          </div>
          <div className="orders-list">
            <div className="order-item order-item-header">
              <span className="order-item-quantity">
                Items
              </span>
              <span className="order-item-date">
                Date
              </span>
              <span className="order-item-price">
                Total Price
              </span>
              <span className="order-item-note">
                Sale note
              </span>
              <span className="order-item-status">
                Status
              </span>
            </div>
            {orderItems}
          </div>
        </div>
      </div>
    );
  }
}

OrdersComponent.propTypes = {
  orders: PropTypes.array,
  actions: PropTypes.object.isRequired,
  searchTerm: PropTypes.string
};

OrdersComponent.defaultProps = {
  orders: [],
  searchTerm: ''
};

export default OrdersComponent;
