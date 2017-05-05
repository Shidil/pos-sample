import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actionCreators from './actions';
import SalesComponent from './components/SalesComponent';
import OrdersComponent from './components/OrdersComponent';

class SalesContainer extends React.Component {
  render() {
    return (
      <div className="content">
        {this.props.children}
      </div>
    );
  }
}

SalesContainer.propTypes = {
  children: PropTypes.object.isRequired
};

let mapStateToPropsForSales = (state) => {
  return {
    products: state.sales.products,
    cart: state.sales.cart,
    searchTerm: state.sales.searchTerm
  };
};

let mapStateToPropsForOrders = (state) => {
  return {
    orders: state.sales.orders
  };
};

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actionCreators, dispatch)
});

const NewSalesContainer = connect(
  mapStateToPropsForSales,
  mapDispatchToProps
)(SalesComponent);

const OrdersContainer = connect(
  mapStateToPropsForOrders,
  mapDispatchToProps
)(OrdersComponent);

export { SalesContainer, NewSalesContainer, OrdersContainer};
