import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  chatbotchat: null,
  chatbotchatlist: null,
  chatslotintent: null,
  cumulativechatanalytics: null,
  hourlyengagement: null,
  engagementfreqency: null,
  communicationchannel: null,
};

export const analyticsSlice = createSlice({
  name: "analytics",
  initialState,
  reducers: {
    setChatbotChat: (state, action) => {
      state.chatbotchat = action.payload;
    },
    setChatbotChatlist: (state, action) => {
      state.chatbotchatlist = action.payload;
    },
    setChatSlotIntent: (state, action) => {
      state.chatslotintent = action.payload;
    },
    setCumulativeChatAnalytics: (state) => {
      state.cumulativechatanalytics = action.payload;
    },
    setHourlyEngagement: (state) => {
      state.hourlyengagement = action.payload;
    },
    setEngagementFreqency: (state) => {
      state.engagementfreqency = action.payload;
    },
    setCommunicationChannel: (state) => {
      state.communicationchannel = action.payload;
    },
  },
});

export const {
  setChatbotChat,
  setChatbotChatlist,
  setChatSlotIntent,
  setCumulativeChatAnalytics,
  setHourlyEngagement,
  setEngagementFreqency,
  setCommunicationChannel,
} = analyticsSlice.actions;

//Selectors for grabbing information fom the data layer
export const selectChatbotChat = (state) => state.analytics.chatbotchat;
export const selectChatbotChatlist = (state) => state.analytics.chatbotchatlist;
export const selectChatSlotIntent = (state) => state.analytics.chatslotintent;
export const selectCumulativeChatAnalytics = (state) =>
  state.analytics.cumulativechatanalytics;
export const selectHourlyEngagement = (state) =>
  state.analytics.hourlyengagement;
export const selectEngagementFreqency = (state) =>
  state.analytics.engagementfreqency;
export const selectCommunicationChannel = (state) =>
  state.analytics.communicationchannel;

export default analyticsSlice.reducer;
