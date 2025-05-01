import { Link, LoaderFunctionArgs } from "react-router";
import { BackendAdminUri } from "../../utilities/enums/backendUri";
import { AdminAppUri_Absolute } from "../../utilities/enums/adminAppUri";
import HotelTable from "./comps/HotelTable";
import getWithToken from "../../utilities/fetchWithToken";
import ILoader from "./dataModels/interfaces/ILoader";

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

export function loader(args: LoaderFunctionArgs): ILoader {
    const param = args.request.url.split('?')[1]
    const searchParams = new URLSearchParams(param)
    const page = searchParams.get('page') || '0'
    const limit = searchParams.get('limit') || '10'

    const hotels = getWithToken(BackendAdminUri.getAdminHotels+ `?page=${page}&limit=${limit}`)

    return {
        hotels
    }
}
