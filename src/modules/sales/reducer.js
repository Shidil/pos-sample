
let getInitialState = () => {
  return {
    products: [{
      title: 'Chicken Biriyani', id: 1
    }, {
      title: 'Beef Biriyani', id: 2
    }],
    orders: [],
    cash: 0
  };
};

export default (state = getInitialState(), action) => {
  switch (action.type) {
  default:
    return state;
  }
};
