import { Link, LoaderFunctionArgs } from "react-router";
import { AdminAppUri_Absolute } from "../../utilities/enums/adminAppUri";
import RoomTable from "./comps/RoomTable";
import getWithToken from "../../utilities/fetchWithToken";
import { BackendAdminUri } from "../../utilities/enums/backendUri";
import ILoader from "./dataModels/interfaces/ILoader";
import { initialLoaderAdminPages } from "../AdminRoot";

export default function RoomManagement() {
    return (
        <>
            <div className="flex justify-between ">
                <h1 className="text-gray-500 text-2xl">Room List</h1>
                <Link to={AdminAppUri_Absolute.addRoom} className="border border-green-700 text-green-700 rounded-sm p-2" >Add New</Link>
            </div>
            <RoomTable />
        </>
    );
}

export function loader(args: LoaderFunctionArgs): ILoader {
    initialLoaderAdminPages()
    
    const param = args.request.url.split('?')[1]
    const searchParams = new URLSearchParams(param)
    const page = searchParams.get('page') || '0'
    const limit = searchParams.get('limit') || '10'

    const rooms = getWithToken(BackendAdminUri.getAdminRooms + `?page=${page}&limit=${limit}`)
    return { rooms }
}