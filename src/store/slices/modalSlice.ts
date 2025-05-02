import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import IModalData, { ModalInfors } from '../../models/interfaces/IModalData';

type HiddenState = 'hidden' | 'fading-hidden' | ''

const initialState: IModalData = {
    hiddenClass: 'hidden',
    modalInfors: {}
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        showModal(state) {
            state.hiddenClass = ''
        },
        setModalHidden(state, action: PayloadAction<HiddenState>) {
            state.hiddenClass = action.payload
        },
        setModalInfors(state, action: PayloadAction<ModalInfors>) {
            state.modalInfors = action.payload
        }
    }
})

export default modalSlice.reducer

export const { showModal, setModalHidden, setModalInfors } = modalSlice.actions