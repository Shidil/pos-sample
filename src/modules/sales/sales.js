import {connect} from 'react-redux';
import * as actionCreators from './actions';
import SalesComponent from './components/SalesComponent';

let mapStateToProps = (state) => {
  return {
    products: state.sales.products
  };
};

const SalesContainer = connect(
  mapStateToProps,
  actionCreators
)(SalesComponent);

export default SalesContainer;
