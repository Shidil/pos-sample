let getInitialState = () => {
  return {
    products: [],
    orders: [],
    cart: {
      items: [],
      discount: 0,
      saleNote: ''
    },
    cash: 0
  };
};

let buildOrder = (cart, status = 'discarded') => ({
  id: Math.random() * 100 + Math.random() * 50,
  items: cart.items,
  saleNote: cart.saleNote,
  price: cart.items.reduce((s, x) => s + x.price, 0),
  date: new Date().toLocaleString(),
  status: status
});

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

  case 'RESET_CART':
    return {
      ...state,
      cart: {
        ...state.cart,
        items: [],
        saleNote: ''
      },
      orders: state.cart.items.length ?
        [...state.orders, buildOrder(state.cart, 'discarded')] : state.orders
    };

  case 'POST_ORDER':
    return {
      ...state,
      cart: {
        ...state.cart,
        items: [],
        saleNote: ''
      },
      orders: [...state.orders, buildOrder(state.cart, 'completed')]
    };

  case 'PARK_ORDER':
    return {
      ...state,
      cart: {
        ...state.cart,
        items: [],
        saleNote: ''
      },
      orders: [...state.orders, buildOrder(state.cart, 'parked')]
    };

  case 'CHANGE_SALES_NOTE':
    return {
      ...state,
      cart: {
        ...state.cart,
        saleNote: action.note
      }
    };

  default:
    return state;
  }
};
