import { Outlet, redirect } from "react-router";
import Sidebar from "../components/Sidebar";
import store from "../store"
import { setAuthen } from "../store/slices/authenSlice"
import { IUserInfo } from "../models/interfaces/IAuthenResponse"
import { getJwtToken, getUserInfor } from "../utilities/localStorageUtils/authenToken"
import { AdminAppUri_Absolute } from "../utilities/enums/adminAppUri"
import IErrorResponse from "../models/interfaces/IErrorResponse";
import ErrorResponse from "../models/implements/ErrorResponse";

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
export async function loader() {
    const jwtToken = getJwtToken()
    const userInfor: IUserInfo = JSON.parse(getUserInfor()!)
    try {
        if (!jwtToken)
            throw new ErrorResponse('Not found jwt token in client!', 401)

        userInfor && store.dispatch(setAuthen(userInfor))

    } catch (err) {
        const er = err as IErrorResponse
        if (er.status === 401) {
            alert('Unauthorize! Please log in admin user!')
            return redirect(AdminAppUri_Absolute.login)
        }
        console.error(err)
    }
}