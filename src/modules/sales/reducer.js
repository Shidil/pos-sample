let getInitialState = () => {
  return {
    products: [],
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
  case 'FETCH_PRODUCTS_SUCCESS':
    return {
      ...state,
      products: [...action.products]
    };

  case 'ADD_PRODUCT_TO_CART':
    return {
      ...state,
      cart: {
        ...state.cart,
        items: [...state.cart.items, action.product]
      }
    };

  case 'REMOVE_ITEM':
    let items = [...state.cart.items];
    items.splice(action.product, 1);

    return {
      ...state,
      cart: {
        ...state.cart,
        items: [...items]
      }
    };
  default:
    return state;
  }
};
