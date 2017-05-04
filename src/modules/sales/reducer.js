
let getInitialState = () => {
  return {
    products: [{
      title: 'Chicken Biriyani', id: 1
    }, {
      title: 'Beef Biriyani', id: 2
    }],
    orders: [],
    cart: [],
    cash: 0
  };
};

export default (state = getInitialState(), action) => {
  switch (action.type) {
  case 'ADD_PRODUCT_TO_CART':
    return {
      ...state,
      cart: [...state.cart, action.product]
    };
  default:
    return state;
  }
};
