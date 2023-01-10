import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  predictivemostpopulartopics: null,
  predictivecumulativechatcount: null,
  predictivehourlyengagement: null,
  predictivecommunicationchannel: null,
  predictivetotalescalatedissues: null,
  predictivetotalchatcount: null,
  predictivehourlychats: null,
  predictivetotalfrequency: null,
  predictivehourlyescalatedissues:null,
  predictivecumulativehourlychats:null,
};

export const predictiveanalyticsSlice = createSlice({
  name: "predictiveanalytics",
  initialState,
  reducers: {
    setPredictiveCumulativeHourlychats: (state, action) => {
      state.predictivecumulativehourlychats = action.payload;
    },
    setPredictiveMostPopularTopics: (state, action) => {
      state.predictivemostpopulartopics = action.payload;
    },
    setPredictiveTotalFrequency: (state, action) => {
      state.predictivetotalfrequency = action.payload;
    },
    SetPredictiveCountEscalatedissues: (state, action) => {
      state.predictivetotalescalatedissues = action.payload;
    },
    setPredictiveCumulativeChatcount: (state, action) => {
      state.predictivecumulativechatcount = action.payload;
    },
    setPredictiveCommunicationChannel: (state, action) => {
      state.predictivecommunicationchannel = action.payload;
    },
    SetPredictiveHourlyCountEscalatedIssues: (state, action) => {
      state.predictivehourlyescalatedissues = action.payload;
    },
  },
});

export const {
  setPredictiveCumulativeHourlychats,
  setPredictiveMostPopularTopics,
  setPredictiveTotalFrequency,
  SetPredictiveCountEscalatedissues,
  setPredictiveCumulativeChatcount,
  setPredictiveCommunicationChannel,
  SetPredictiveHourlyCountEscalatedIssues,
} = predictiveanalyticsSlice.actions;

//Selectors for grabbing information fom the data layer
export const selectPredictiveCumulativeHourlychats = (state) => state.predictiveanalytics.predictivecumulativehourlychats;
export const selectPredictiveMostPopularTopics = (state) => state.predictiveanalytics.predictivemostpopulartopics;
export const selectPredictiveTotalFrequency = (state) => state.predictiveanalytics.predictivetotalfrequency;
export const SelectPredictiveCountEscalatedissues = (state) => state.predictiveanalytics.predictivetotalescalatedissues;
export const selectPredictiveCumulativeChatcount = (state) => state.predictiveanalytics.predictivecumulativechatcount;
export const selectPredictiveCommunicationChannel = (state) => state.predictiveanalytics.predictivecommunicationchannel;
export const SelectPredictiveHourlyCountEscalatedIssues = (state) => state.predictiveanalytics.predictivehourlyescalatedissues;

export default predictiveanalyticsSlice.reducer;
