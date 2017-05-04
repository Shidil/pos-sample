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
