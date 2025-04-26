import { configureStore } from '@reduxjs/toolkit'

import authenReducer from './slices/authenSlice'
import addProductFormReducer from './slices/addProductFormSlice'

const store = configureStore({
    reducer: {
        authen: authenReducer,
        addProductForm: addProductFormReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch

export default store