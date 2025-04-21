import { configureStore } from '@reduxjs/toolkit'

import authenReducer from './slices/authenSlice'

const store = configureStore({
    reducer: {
        authen: authenReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch

export default store