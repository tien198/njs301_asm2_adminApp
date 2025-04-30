import { configureStore } from '@reduxjs/toolkit'

import authenReducer from './slices/authenSlice'
import addHotelFormReducer from './slices/addHotelFormSlice'
import addRoomFormReducer from './slices/addRoomFormSlice'

const store = configureStore({
    reducer: {
        authen: authenReducer,
        addHotelForm: addHotelFormReducer,
        addRoomForm: addRoomFormReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch

export default store