import { remove } from 'lodash';

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
    },
    {
      title: 'Mutton Biriyani',
      id: 3,
      price: 300
    },
    {
      title: 'Fish Biriyani',
      id: 4,
      price: 250
    },
    {
      title: 'Prawns Biriyani',
      id: 5,
      price: 200
    },
    {
      title: 'Mussels Biriyani',
      id: 6,
      price: 220
    },
    {
      title: 'Mixed Biriyani',
      id: 7,
      price: 250
    },
    {
      title: 'Kappa Biriyani',
      id: 8,
      price: 100
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

  case 'REMOVE_ITEM':
    let items = [...state.cart.items];
    remove(items, {
      id: action.product.id
    });

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
