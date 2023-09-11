import { configureStore } from '@reduxjs/toolkit'
import ServiceReducer from './src/slices/serviceSlices'
import ReportReducer from './src/slices/reportSlices'

export const store = configureStore({
  reducer: {
    service: ServiceReducer,
    report: ReportReducer
  },
})