import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import IAddHotelFormFieldsData, { HotelFeatured } from '../../models/interfaces/IAddHotelFormFieldsData';


// const initialState: IAddHotelFormFieldsData = {
//    name: '', type: 'Apartments', city: '', address: '', distance: '', title: '', price: '', desc: '', images: '', featured: 'false', rooms: []
// }

const initialState: IAddHotelFormFieldsData = {
    name: 'hotel Name', type: 'Apartments', city: 'Newyork', address: '1980 unknown', distance: '12', title: 'Hotel Del Luna', price: '1200', desc: 'Super Delux', images: 'https://image-uri', featured: 'false', rooms: ['']
}

const addProductFormSclice = createSlice({
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

export default addProductFormSclice.reducer

export const {
    setName, setType, setCity, setAddress, setDistance, setTitle, setPrice, setDesc, setImages, setFeatured, setRooms
} = addProductFormSclice.actions