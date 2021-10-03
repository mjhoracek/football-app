import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  snackbar: false
}

export const snackbarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    setSnackbar: (state, action) => {
      state.snackbar = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setSnackbar } = snackbarSlice.actions

export default snackbarSlice.reducer