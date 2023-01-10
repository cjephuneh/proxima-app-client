import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatcontext: null,
  userchatcontext: null,
  agentchatcontext: null,
  fullsummarizedchatcontext: null,
  usersummarizedchatcontext: null,
  clientsummarizedchatcontext: null,
};

export const summarizationSlice = createSlice({
  name: "summarization",
  initialState,
  reducers: {
    setChatContext: (state, action) => {
      state.chatcontext = action.payload;
    },
    setUserChatContext: (state, action) => {
      state.userchatcontext = action.payload;
    },
    setAgentChatContext: (state, action) => {
      state.agentchatcontext = action.payload;
    },
    setFullSummarizedChatContext: (state, action) => {
      state.fullsummarizedchatcontext = action.payload;
    },
    setUserSummarizedChatContext: (state, action) => {
      state.usersummarizedchatcontext = action.payload;
    },
    setClientSummarizedChatContext: (state, action) => {
      state.clientsummarizedchatcontext = action.payload;
    },

  },
});

export const {
  setChatContext,
  setUserChatContext,
  setAgentChatContext,
  setFullSummarizedChatContext,
  setUserSummarizedChatContext,
  setClientSummarizedChatContext,
} = summarizationSlice.actions;

//Selectors for grabbing information fom the data layer
export const selectChatContext = (state) => state.summarization.chatcontext;
export const selectUserChatContext = (state) => state.summarization.userchatcontext;
export const selectAgentChatContext = (state) => state.summarization.agentchatcontext;
export const selectFullSummarizedChatContext = (state) => state.summarization.fullsummarizedchatcontext;
export const selectUserSummarizedChatContext = (state) => state.summarization.usersummarizedchatcontext;
export const selectClientSummarizedChatContext = (state) => state.summarization.clientsummarizedchatcontext;

export default summarizationSlice.reducer;
