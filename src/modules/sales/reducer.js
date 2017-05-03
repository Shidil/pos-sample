
let getInitialState = () => {
  return {
    products: [{
      title: 'Chicken Biriyani'
    }, {
      title: 'Beef Biriyani'
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
