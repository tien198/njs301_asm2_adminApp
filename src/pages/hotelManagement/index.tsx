import { redirect, useLoaderData } from "react-router";
import HotelRow from "./comps/HotelRow";
import { BackendAdminUri } from "../../utilities/enums/backendUri";
import { getJwtToken } from "../../utilities/localStorageUtils/authenToken";
import IErrorResponse from "../../models/interfaces/IErrorResponse";
import { AdminAppUri_Absolute } from "../../utilities/enums/adminAppUri";
import ReactRouterAwait from "../../components/ReactRouterAwait";
import IHotel from "./dataModels/IHotel";

export default function HotelList() {
    const loader = useLoaderData()

    return (
        <table className="w-full text-sm mt-4">
            <thead className="text-left bg-gray-100">
                <tr>
                    <th><input type="checkbox" /></th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Title</th>
                    <th>City</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <ReactRouterAwait resoleve={loader}>{hotels =>
                    hotels.map((hotel: IHotel) =>
                        <HotelRow key={hotel._id} hotel={hotel} />
                    )}
                </ReactRouterAwait>
            </tbody>
        </table>
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