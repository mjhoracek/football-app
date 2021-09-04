import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  settings: false
}

export const viewSlice = createSlice({
  name: 'view',
  initialState,
  reducers: {
    setView: (state) => {
      state.settings = !state.settings
    },
  },
})

// Action creators are generated for each case reducer function
export const { setView } = viewSlice.actions

export default viewSlice.reducer