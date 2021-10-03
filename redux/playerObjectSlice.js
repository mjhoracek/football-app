import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  playerObject: null
}

export const playerObjectSlice = createSlice({
  name: 'playerObject',
  initialState,
  reducers: {
    setPlayerObject: (state, action) => {
      state.playerObject = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { setPlayerObject } = playerObjectSlice.actions

export default playerObjectSlice.reducer