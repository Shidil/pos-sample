import React from 'react';
import PropTypes from 'prop-types';
import './CartComponent.less';

class CartComponent extends React.Component {
  render() {
    return (
      <div className="cart">
        {
          this.props.data.items.map(item => (
            <div classNam="cart-item">
              {item.title} {item.price}
            </div>
          ))
        }
      </div>
    );
  }
}

CartComponent.propTypes = {
  data: PropTypes.object.isRequired
};

export default CartComponent;
