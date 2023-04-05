import { configureStore } from '@reduxjs/toolkit'

import testReducer from './slice/testSlice'
import authReducer from './slice/auth/authSlice'

export const store = configureStore({
  reducer: {
    test: testReducer,
    auth: authReducer
  },
})