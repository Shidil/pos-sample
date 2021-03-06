export const addProductToCart = (product) => ({
  type: 'ADD_PRODUCT_TO_CART',
  product
});


export const removeFromCart = (product) => ({
  type: 'REMOVE_ITEM',
  product
});

export const resetCart = () => ({
  type: 'RESET_CART'
});

export const changeSalesNote = (e) => ({
  type: 'CHANGE_SALES_NOTE',
  note: e.target.value
});

export const postOrder = () => ({
  type: 'POST_ORDER'
});

export const parkOrder = () => ({
  type: 'PARK_ORDER'
});

export const searchProducts = e => ({
  type: 'SEARCH_PRODUCTS',
  term: e.target.value
});

export const clearSearch = () => ({
  type: 'SEARCH_PRODUCTS',
  term: ''
});

export const fetchProducts = () => ({
  type: 'FETCH_PRODUCTS_SUCCESS',
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
  }]
});
