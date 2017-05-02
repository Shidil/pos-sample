if (process.env.NODE_ENV === 'production') {
  module.exports = require('./createStore.production').default;
}
else {
  module.exports = require('./createStore.development').default;
}
