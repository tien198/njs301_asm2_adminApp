import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IHotelForm, { HotelFeatured } from '../../models/interfaces/IHotelForm';


// const initialState: IHotel = {
//    name: '', type: 'Apartments', city: '', address: '', distance: '', title: '', price: '', desc: '', images: '', featured: 'false', rooms: []
// }

const initialState: IHotelForm = {
    name: '', type: '', city: '', address: '', distance: '', title: '', price: '', desc: '', images: '', featured: 'false', rooms: ['']
}

const addHotelFormSclice = createSlice({
    name: 'addProductForm',
    initialState,
    reducers: {
        setName(state, action: PayloadAction<string>) {
            state.name = action.payload
        },
        setType(state, action: PayloadAction<string>) {
            state.type = action.payload
        },
        setCity(state, action: PayloadAction<string>) {
            state.city = action.payload
        },
        setAddress(state, action: PayloadAction<string>) {
            state.address = action.payload
        },
        setDistance(state, action: PayloadAction<string>) {
            state.distance = action.payload
        },
        setTitle(state, action: PayloadAction<string>) {
            state.title = action.payload
        },
        setPrice(state, action: PayloadAction<string>) {
            state.price = action.payload
        },
        setDesc(state, action: PayloadAction<string>) {
            state.desc = action.payload
        },
        setImages(state, action: PayloadAction<string>) {
            state.images = action.payload
        },
        setFeatured(state, action: PayloadAction<HotelFeatured>) {
            state.featured = action.payload
        },
        setRooms(state, action: PayloadAction<string[]>) {
            state.rooms = action.payload
        }
    }
})

export default addHotelFormSclice.reducer

export const {
    setName, setType, setCity, setAddress, setDistance, setTitle, setPrice, setDesc, setImages, setFeatured, setRooms
} = addHotelFormSclice.actions