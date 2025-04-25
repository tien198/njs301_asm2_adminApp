import { Link } from "react-router";
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
                <Link to={AdminAppUri_Absolute.addHotel} className="border border-green-700 text-green-700 rounded-sm p-2" >Add New</Link>
            </div>
            <HotelTable />
        </>
    );
}

export async function loader() {
    const jwtToken = getJwtToken()
    try {
        if (!jwtToken)
            return

        const res = await fetch(BackendAdminUri.getAdminHotels, {
            headers: { 'authorization': jwtToken }
        })

        const data = res.json()
        if (!res.ok)
            throw await data as IErrorResponse

        return data
    } catch (err) {
        console.error(err)
    }
}
