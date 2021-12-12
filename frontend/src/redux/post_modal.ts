import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface PostModalState {
  show: Boolean
}

const initialState: PostModalState = {
  show: false,
}

export const postModalSlice = createSlice({
  name: 'post_modal',
  initialState,
  reducers: {
    toggle: (state) => {
      state.show = !state.show
    },

  },
})

export const { toggle } = postModalSlice.actions

export default postModalSlice.reducer