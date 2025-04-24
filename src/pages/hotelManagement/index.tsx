import { Link, redirect } from "react-router";
import { BackendAdminUri } from "../../utilities/enums/backendUri";
import { getJwtToken } from "../../utilities/localStorageUtils/authenToken";
import IErrorResponse from "../../models/interfaces/IErrorResponse";
import { AdminAppUri_Absolute } from "../../utilities/enums/adminAppUri";
import HotelTable from "./comps/HotelTable";

export default function HotelList() {

    return (
        <>
            <div className="flex justify-between ">
                <h1 className="text-gray-500 text-2xl">Hotel List</h1>
                <Link to={''} className="border border-green-700 text-green-700 rounded-sm p-2" >Add New</Link>
            </div>
            <HotelTable />
        </>
    );
}


export async function loader() {
    const jwtToken = getJwtToken()
    try {
        const res = await fetch(BackendAdminUri.getAdminHotels, {
            headers: { 'authorization': jwtToken }
        })

        const data = res.json()
        if (!res.ok)
            throw await data as IErrorResponse
        return data
    } catch (err) {
        const er = err as IErrorResponse
        if (er.status === 401) {
            const login = confirm('Unauthorize! Please log in admin user!')
            if (login)
                return redirect(AdminAppUri_Absolute.login)
        }
        console.error(err)
    }
}