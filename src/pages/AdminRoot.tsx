import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";
import store from "../store"
import { setAuthen } from "../store/slices/authenSlice"
import { getJwtToken, getUserInfor } from "../utilities/localStorageUtils/authenToken"
import IErrorResponse from "../models/interfaces/IErrorResponse";
import ErrorResponse from "../models/implements/ErrorResponse";
import IAuthenResponse from "../models/interfaces/IAuthenResponse";
import { setModalInfors, showModal } from "../store/slices/modalSlice";

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



/**
 * this loader is called each time any admin page is loaded
 */
export function initialLoaderAdminPages() {
    const token = getJwtToken()
    const userInfor = getUserInfor()
    try {
        if (!token)
            throw new ErrorResponse('Not found jwt token in client!', 401)

        const authen: IAuthenResponse = { token, user: userInfor }

        token && userInfor && store.dispatch(setAuthen(authen))

    } catch (error) {
        const er = error as IErrorResponse
        if (er.status === 401) {
            store.dispatch(setModalInfors(er))
            store.dispatch(showModal())
        }
        console.error(error)
    }
}
