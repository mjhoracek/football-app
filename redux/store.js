import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userSlice'
import counterReducer from './counter'
import viewReducer from './viewSlice'

export const store = configureStore({
  reducer: {
      counter: counterReducer,
      user: userReducer,
      view: viewReducer
  },
})
