import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import IModalData, { ModalInfors } from '../../models/interfaces/IModalData';


const initialState: IModalData = {
    hiddenClass: 'hidden',
    modalInfors: {}
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        show(state) {
            state.hiddenClass = ''
        },
        // action.payload:  'hidden' | 'fading-hidden' | '';
        setHidden(state, action: PayloadAction<string>) {
            state.hiddenClass = action.payload
        },
        setModalInfors(state, action: PayloadAction<ModalInfors>) {
            state.modalInfors = action.payload
        }
    }
})

export default modalSlice.reducer

export const { setHidden } = modalSlice.actions