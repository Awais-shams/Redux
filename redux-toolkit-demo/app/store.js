const configureStore = require("@reduxjs/toolkit").configureStore;

const cakeReducer = require("../features/cake/Cake");

const userReducer=require('../features/async-thunk/Users')


const store = configureStore({
  reducer: {
    cake: cakeReducer,
    user:userReducer
  },
});

module.exports = store;
