import { configureStore } from '@reduxjs/toolkit'
import playerObjectReducer from './playerObjectSlice'
import counterReducer from './counter'
import snackbarReducer from './snackbarSlice'

export const store = configureStore({
  reducer: {
      counter: counterReducer,
      playerObject: playerObjectReducer,
      snackbar: snackbarReducer
  },
})
