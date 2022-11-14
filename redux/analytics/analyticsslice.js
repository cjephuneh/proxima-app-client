import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  mostpopulartopics: null,
  chatbotchat: null,
  chatbotchatlist: null,
  chatslotintent: null,
  cumulativechatanalytics: null,
  hourlyengagement: null,
  communicationchannel: null,
  totalescalatedissues: null,
  totalchatcount: null,
  hourlychats: null,
  hourlyqueriesreceived: null,
  frequency: null,
  hourlyescalatedissues:null,
  cumulativehourlychats:null,
};

export const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    setChatbotChat: (state, action) => {
      state.chatbotchat = action.payload;
    },
    setCumulativeHourlyChats: (state, action) => {
      state.cumulativehourlychats = action.payload;
    },
    setMostPopularTopics: (state, action) => {
      state.mostpopulartopics = action.payload;
    },
    setFrequency: (state, action) => {
      state.frequency = action.payload;
    },
    setCountAllChats: (state, action) => {
      state.totalchatcount = action.payload;
    },
    SetHourlychats: (state, action) => {
      state.hourlychats = action.payload;
    },
    SetHourlyQueriesReceived: (state, action) => {
      state.hourlyqueriesreceived = action.payload;
    },
    SetCountEscalatedissues: (state, action) => {
      state.totalescalatedissues = action.payload;
    },
    setCumulativeChatAnalytics: (state, action) => {
      state.cumulativechatanalytics = action.payload;
    },
    setHourlyEngagement: (state, action) => {
      state.hourlyengagement = action.payload;
    },
    setCommunicationChannel: (state, action) => {
      state.communicationchannel = action.payload;
    },
    SetHourlyCountEscalatedIssues: (state, action) => {
      state.hourlyescalatedissues = action.payload;
    },
  },
});

export const {
  SetHourlyCountEscalatedIssues,
  setMostPopularTopics,
  setFrequency,
  SetHourlychats,
  SetHourlyQueriesReceived,
  setCountAllChats,
  SetCountEscalatedissues,
  setCumulativeChatAnalytics,
  setHourlyEngagement,
  setCommunicationChannel,
  setCumulativeHourlyChats,
} = analyticsSlice.actions;

//Selectors for grabbing information fom the data layer
export const selectCountAllChats = (state) => state.analytics.totalchatcount;
export const selectCumulativeHourlyChats = (state) => state.analytics.cumulativehourlychats;
export const SelectHourlyCountEscalatedIssues = (state) => state.analytics.hourlyescalatedissues;
export const selectMostPopularTopics = (state) => state.analytics.mostpopulartopics;
export const SelectHourlychats = (state) => state.analytics.hourlychats;
export const SelectHourlyQueriesReceived = (state) => state.analytics.hourlyqueriesreceived;
export const SelectCountEscalatedissues = (state) => state.analytics.totalescalatedissues;
export const selectCumulativeChatAnalytics = (state) =>state.analytics.cumulativechatanalytics;
export const selectHourlyEngagement = (state) => state.analytics.hourlyengagement;
export const selectCommunicationChannel = (state) => state.analytics.communicationchannel;
export const selectFrequency = (state) => state.analytics.frequency;
export default analyticsSlice.reducer;
