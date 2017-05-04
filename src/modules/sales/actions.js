export const addProductToCart = (product) => ({
  type: 'ADD_PRODUCT_TO_CART',
  product
});


export const removeFromCart = (product) => ({
  type: 'REMOVE_ITEM',
  product
});
