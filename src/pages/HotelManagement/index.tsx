import { Link } from "react-router";
import { BackendAdminUri } from "../../utilities/enums/backendUri";
import { getJwtToken } from "../../utilities/localStorageUtils/authenToken";
import IErrorResponse from "../../models/interfaces/IErrorResponse";
import { AdminAppUri_Absolute } from "../../utilities/enums/adminAppUri";
import HotelTable from "./comps/HotelTable";
import getWithToken from "../../utilities/fetchWithToken";
import ILoader from "./dataModels/interfaces/ILoader";
import IHotel from "./dataModels/interfaces/IHotel";

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

export function loader(): ILoader {
    const hotels = getWithToken(BackendAdminUri.getAdminHotels)

    return {
        hotels
    }
}
