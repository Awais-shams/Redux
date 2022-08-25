const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

const initialState = {
  loading: false,
  userData: [],
  error: "",
};

const fetchData = createAsyncThunk("user/fetchDataStatus", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/user")
    .then((response) => {
      response.data.map((user) => user.id);
    })
    .catch((err) => {
      err.message;
    });
});

const users = createSlice({
  name: "user",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchData.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchData.fulfilled, (state, action) => {
      (state.loading = false),
        (state.userData = action.status.payload),
        (state.error = "");
    });
    builder.addCase(fetchData.rejected, (state, action) => {
      (state.loading = false),
        (state.userData = []),
        (state.error = action.error.message);
    });
  },
});

module.exports = users.reducer;
module.exports.fetchData = fetchData;
