import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IRoomForm from '../../models/interfaces/IRoomForm';

const initialState: IRoomForm = {
    title: '', price: '0', maxPeople: '0', desc: '', roomNumbers: '', hotelId: ''
}

const addRoomFormSlice = createSlice({
    name: 'addRoomForm',
    initialState,
    reducers: {
        setTitle(state, action: PayloadAction<string>) {
            state.title = action.payload
        },
        setPrice(state, action: PayloadAction<string>) {
            state.price = action.payload
        },
        setMaxPeople(state, action: PayloadAction<string>) {
            state.maxPeople = action.payload
        },
        setDesc(state, action: PayloadAction<string>) {
            state.desc = action.payload
        },
        setRoomNumbers(state, action: PayloadAction<string>) {
            state.roomNumbers = action.payload
        },
        setHotelId(state, action: PayloadAction<string>) {
            state.hotelId = action.payload
        }
    }
})

export default addRoomFormSlice.reducer

export const {
    setTitle, setPrice, setMaxPeople, setDesc, setRoomNumbers, setHotelId
} = addRoomFormSlice.actions