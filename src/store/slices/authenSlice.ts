import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import IAuthenResponse from '../../models/interfaces/IAuthenResponse'

const initialState: IAuthenResponse = {
    token: '',
    user: {
        isAdmin: false
    }
}

const authenSlice = createSlice({
    name: 'authen',
    initialState,
    reducers: {
        setAuthen: (state, action: PayloadAction<IAuthenResponse>) => {
            return action.payload
        },
        resetAuthen: () => {
            return initialState
        }
    }
})

export default authenSlice.reducer

export const { setAuthen, resetAuthen } = authenSlice.actions