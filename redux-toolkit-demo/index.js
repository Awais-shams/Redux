const store = require("../redux-toolkit-demo/app/store");
const { fetchData } = require("./features/async-thunk/Users");


const cakeActions =
  require("../redux-toolkit-demo/features/cake/Cake").cakeActions;

console.log("Initial State", store.getState());

const unSubscribe = store.subscribe(() => {
  console.log("Updated State", store.getState());
});

// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.ordered());
// store.dispatch(cakeActions.restocked(5));

store.dispatch(fetchData())

unSubscribe();
