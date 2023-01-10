import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchbody: null,
  searchresponse: null,

};

export const searchSlice = createSlice({
  name: "searchengine",
  initialState,
  reducers: {
    setSearchBody: (state, action) => {
      state.searchbody = action.payload;
    },
    setSearchResponse: (state, action) => {
      state.searchresponse = action.payload;
    },
  },
});

export const {
  setSearchBody,
  setSearchResponse,

} = searchSlice.actions;

//Selectors for grabbing information fom the data layer
export const selectSearchBody = (state) => state.searchengine.searchbody;
export const selectSearchResponse = (state) => state.searchengine.searchresponse;

export default searchSlice.reducer;
