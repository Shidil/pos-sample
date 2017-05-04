import React from 'react';
import PropTypes from 'prop-types';
import './OrdersComponent.less';

class OrdersComponent extends React.Component {
  componentWillMount() {
    // this.props.actions.fetchProducts();
  }

  render() {
    return (
      <div className="grid">
        <div className="orders">
          orders
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
