
let getInitialState = () => {
  return {
    products: [{
      title: 'Chicken Biriyani',
      id: 1,
      price: 200
    }, {
      title: 'Beef Biriyani',
      id: 2,
      price: 150
    }],
    orders: [],
    cart: {
      items: [],
      discount: 0
    },
    cash: 0
  };
};

export default (state = getInitialState(), action) => {
  switch (action.type) {
  case 'ADD_PRODUCT_TO_CART':
    return {
      ...state,
      cart: {
        ...state.cart,
        items: [...state.cart.items, action.product]
      }
    };
  default:
    return state;
  }
};
