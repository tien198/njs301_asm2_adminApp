import { useNavigate } from "react-router";

import { useAppDispath } from "./reduxHooks";

import { AdminAppUri_Absolute } from "../utilities/enums/adminAppUri";
import { getUserInfor } from "../utilities/localStorageUtils/authenToken";
import { setAuthen } from '../store/slices/authenSlice'
import { IUserInfo } from "../models/interfaces/IAuthenResponse";
import { useEffect } from "react";

// this hook was call first render in the /src/pages/Root.tsx
export default function useInitAppStates() {
    const dispatch = useAppDispath()
    const navigate = useNavigate()
    const userInfor: IUserInfo = JSON.parse(getUserInfor() ?? '')
    useEffect(() => {
        if (!userInfor || !userInfor?.isAdmin) {
            !userInfor?.isAdmin && alert('User doen\'t have permission! Please login admin user!')
            navigate(AdminAppUri_Absolute.login)
            return
        }
        dispatch(setAuthen(userInfor))
    }, [])

}