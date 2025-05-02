import { configureStore } from '@reduxjs/toolkit'

import authenReducer from './slices/authenSlice'
import addHotelFormReducer from './slices/addHotelFormSlice'
import addRoomFormReducer from './slices/addRoomFormSlice'
import modalReducer from './slices/modalSlice'

const store = configureStore({
    reducer: {
        authen: authenReducer,
        addHotelForm: addHotelFormReducer,
        addRoomForm: addRoomFormReducer,
        modal: modalReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispath = typeof store.dispatch

export default store