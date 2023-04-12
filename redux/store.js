import { configureStore } from '@reduxjs/toolkit'

import authReducer from './slice/auth/authSlice'
import chatReducer from './slice/chat/chatSlice'
import communityReducer from './slice/community/communitySlice'
import analyticsReducer from './slice/analytics/analyticsSlice'
import surveyReducer from './slice/survey/surveySlice'
import tenantManagementReducer from './slice/tenantmanagement/tenantmanagementSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    chat: chatReducer,
    community: communityReducer,
    analytics: analyticsReducer,
    survey: surveyReducer,
    tenant: tenantManagementReducer
  },
})