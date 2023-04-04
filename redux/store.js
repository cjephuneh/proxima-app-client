import { configureStore } from '@reduxjs/toolkit'

import testReducer from './slice/testSlice'

export const store = configureStore({
  reducer: {
    test: testReducer
  },
})