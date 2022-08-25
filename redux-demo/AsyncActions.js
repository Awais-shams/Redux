const { default: axios } = require("axios");
const redux = require("redux");
const applyMiddleware = redux.applyMiddleware;
const createStore = redux.createStore;
const thunk = require("redux-thunk").default;

const initialState = {
  loading: false,
  users: [],
  error: "",
};

const FETCH_USER_REQUESTED = "FETCH_USER_REQUESTED";
const FETCH_USER_SUCCEEDED = "FETCH_USER_SUCCEEDED";
const FETCH_USER_FAILED = "FETCH_USER_FAILED";

function fetchUserRequest() {
  return {
    type: FETCH_USER_REQUESTED,
  };
}

function fetchUserSucceeded(user) {
  return {
    type: FETCH_USER_SUCCEEDED,
    payload: user,
  };
}

function fetchUserFailed(error) {
  return {
    type: FETCH_USER_FAILED,
    payload: error,
  };
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_USER_REQUESTED:
      return {
        ...state,
        loading: true,
      };
    case FETCH_USER_SUCCEEDED:
      return {
        ...state,
        loading: false,
        users: action.payload,
        error: "",
      };
    case FETCH_USER_FAILED:
      return {
        ...state,
        loading: false,
        users: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

function fetchUsers() {
  return function (dispatch) {
    dispatch(fetchUserRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const user = response.data.map((userData) => userData.name);
        dispatch(fetchUserSucceeded(user));
      })
      .catch((err) => {
        dispatch(fetchUserFailed(err.message));
      });
  };
}

const store = createStore(reducer, applyMiddleware(thunk));

store.subscribe(() => console.log("data", store.getState()));

store.dispatch(fetchUsers());
