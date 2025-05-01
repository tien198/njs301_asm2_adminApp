import { Outlet, redirect } from "react-router";
import Sidebar from "../components/Sidebar";
import store from "../store"
import { setAuthen } from "../store/slices/authenSlice"
import { getJwtToken, getUserInfor } from "../utilities/localStorageUtils/authenToken"
import { AdminAppUri_Absolute } from "../utilities/enums/adminAppUri"
import IErrorResponse from "../models/interfaces/IErrorResponse";
import ErrorResponse from "../models/implements/ErrorResponse";
import { useEffect } from "react";
import { useAppSeletor } from "../cusHooks/reduxHooks";
import AuthenResponse from "../models/implements/AuthenResponse";

export default function AdminRoot() {
    // check logged in user
    // if not, redirect to login
    const jwtToken = useAppSeletor(state => state.authen.token)
    useEffect(() => {
        if (!jwtToken)
            window.location.href = AdminAppUri_Absolute.login
    }, [jwtToken])

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
    const token = getJwtToken()
    const userInfor = getUserInfor()
    try {
        if (!token)
            throw new ErrorResponse('Not found jwt token in client!', 401)

        const authen = new AuthenResponse(token, userInfor)

        userInfor && store.dispatch(setAuthen(authen))

    } catch (err) {
        const er = err as IErrorResponse
        if (er.status === 401) {
            alert('Unauthorize! Please log in admin user!')
            return redirect(AdminAppUri_Absolute.login)
        }
        console.error(err)
    }
}