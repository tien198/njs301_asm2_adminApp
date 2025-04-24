import { Outlet, redirect } from "react-router";
import Sidebar from "../components/Sidebar";
import store from "../store"
import { setAuthen } from "../store/slices/authenSlice"
import { IUserInfo } from "../models/interfaces/IAuthenResponse"
import { getJwtToken, getUserInfor } from "../utilities/localStorageUtils/authenToken"
import { AdminAppUri_Absolute } from "../utilities/enums/adminAppUri"

export default function AdminRoot() {
    return (
        <>
            <Sidebar />
            <div className="flex">
                <div className="w-72"></div>
                <div className="w-full p-9">
                    <Outlet />
                </div>
            </div>
        </>
    )
}



// initialize entire app states in hear
export function loader() {
    const jwtToken = getJwtToken()
    const userInfor: IUserInfo = JSON.parse(getUserInfor())

    if (!jwtToken || !userInfor.isAdmin) {
        !userInfor.isAdmin && alert('You don\'t have permission! Please login admin user!')
        return redirect(AdminAppUri_Absolute.login)
    }
    store.dispatch(setAuthen(userInfor))
}