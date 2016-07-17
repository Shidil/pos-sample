
let getInitialState = () => {
  return {
    counter: 0
  };
};

let incrementCounter = (counter) => {
  return {
    counter: counter + 1
  };
};

let decrementCounter = (counter) => {
  return {
    counter: counter - 1
  };
};

/**
 * Simple counter reducer.
 * From the counter expample in http://redux.js.org/
 * @param {Object} state old state
 * @param {Object} action plain action object
 * @returns {Object} new state
 */
export default (state = getInitialState(), action) => {
  switch (action.type) {
  case 'INCREMENT':
    return incrementCounter(state.counter);
  case 'DECREMENT':
    return decrementCounter(state.counter);
  default:
    return state;
  }
};
