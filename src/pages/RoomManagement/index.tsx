import { Link } from "react-router";
import { AdminAppUri_Absolute } from "../../utilities/enums/adminAppUri";
import RoomTable from "./comps/RoomTable";
import getWithToken from "../../utilities/fetchWithToken";
import { BackendAdminUri } from "../../utilities/enums/backendUri";
import ILoader from "./dataModels/interfaces/ILoader";

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

export function loader(): ILoader {
    const rooms = getWithToken(BackendAdminUri.getAdminRooms)
    return { rooms }
}