import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { IUserInfo } from '../../models/interfaces/IAuthenResponse'

const initialState: IUserInfo = {
    isAdmin: false
}

const authenSlice = createSlice({
    name: 'authen',
    initialState,
    reducers: {
        setAuthen: (state, action: PayloadAction<IUserInfo>) => {

        }
    }
})

export default authenSlice.reducer

export const { setAuthen } = authenSlice.actions