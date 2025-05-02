import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import IModalData, { HiddenState, ModalInfors, ModalType } from '../../models/interfaces/IModalData';
import IErrorResponse from "../../models/interfaces/IErrorResponse";


const initialState: IModalData = {
    hiddenClass: 'hidden',
    modalInfors: {} as IErrorResponse,
    type: ""
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
        },
        setModalType(state, action: PayloadAction<ModalType>) {
            state.type = action.payload
        },
        reInitState(_, action: PayloadAction<IModalData>) {
            return action.payload
        },
        resetState() {
            return initialState
        }
    }
})

export default modalSlice.reducer

export const { showModal, setModalHidden, setModalInfors, setModalType, reInitState, resetState } = modalSlice.actions