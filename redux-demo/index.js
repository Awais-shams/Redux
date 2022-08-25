const redux = require("redux");

const createStore = redux.createStore;

const CAKE_ORDERED = "CAKE_ORDERED";
const CAKE_RESTOCKED = "CAKE_RESTOCKED";

const initialState = {
  numOfCakes: 10,
};

function placeOrder() {
  return {
    type: CAKE_ORDERED,
    dec: 1,
  };
}

function restock() {
  return {
    type: CAKE_RESTOCKED,
    payload: 10,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case CAKE_ORDERED:
      return {
        numOfCakes: state.numOfCakes - action.dec,
      };
    case CAKE_RESTOCKED:
      return {
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const store = createStore(reducer);
console.log(store.getState());

const unsubscribe = store.subscribe(() =>
  console.log("pdata state", store.getState())
);

store.dispatch(placeOrder());

if (store.getState().numOfCakes <= 7) {
  console.log("restocking");
  store.dispatch(restock());
}

console.log(store.getState().numOfCakes);

unsubscribe();
