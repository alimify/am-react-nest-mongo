import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/dist/query'
import post_modal from './post_modal'
import { commentApi } from './services/comment'
import { postApi } from './services/post'

export const store = configureStore({
  reducer: {
      postModal: post_modal,
      [postApi.reducerPath]: postApi.reducer,
      [commentApi.reducerPath]: commentApi.reducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch