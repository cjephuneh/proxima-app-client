import { configureStore } from '@reduxjs/toolkit'

import authReducer from './slice/auth/authSlice'
import chatReducer from './slice/chat/chatSlice'
import communityReducer from './slice/community/communitySlice'
import analyticsReducer from './slice/analytics/analyticsSlice'
import surveyReducer from './slice/survey/surveySlice'
import tenantManagementReducer from './slice/tenantmanagement/tenantmanagementSlice'
import summarizeReducer from './slice/summarize/summarizeSlice'
import paraphraseReducer from './slice/paraphrase/paraphraseSlice'
import generationReducer from './slice/generation/generationSlice'
import predictiveReducer from './slice/predictive/predictiveSlice'
import searchReducer from './slice/search/searchSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    search: searchReducer,
    chat: chatReducer,
    community: communityReducer,
    analytics: analyticsReducer,
    survey: surveyReducer,
    tenant: tenantManagementReducer,
    summarize: summarizeReducer,
    paraphrase: paraphraseReducer,
    generation: generationReducer,
    predictive: predictiveReducer
  },
})