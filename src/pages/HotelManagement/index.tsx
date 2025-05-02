import { Link, LoaderFunctionArgs } from "react-router";
import { BackendAdminUri } from "../../utilities/enums/backendUri";
import { AdminAppUri_Absolute } from "../../utilities/enums/adminAppUri";
import HotelTable from "./comps/HotelTable";
import getWithToken from "../../utilities/fetchWithToken";
import ILoader from "./dataModels/interfaces/ILoader";
import { initialLoaderAdminPages } from "../AdminRoot";
import ConfirmDeleteModal from "../../components/Modal/ConfirmDeleteModal";
import deleteWithToken from "../../utilities/deleteWithToken";
import { useAppSelector } from "../../cusHooks/reduxHooks";

export default function HotelList() {
    const modalType = useAppSelector(state => state.modal.type)

    return (
        <>
            <div className="flex justify-between ">
                <h1 className="text-gray-500 text-2xl">Hotel List</h1>
                <Link to={AdminAppUri_Absolute.addHotel} className="border border-green-700 text-green-700 rounded-sm p-2" >Add New</Link>
            </div>
            <HotelTable />
            {modalType === 'confirm' && <ConfirmDeleteModal />}
        </>
    );
}

export function loader(args: LoaderFunctionArgs): ILoader {
    initialLoaderAdminPages()

    const param = args.request.url.split('?')[1]
    const searchParams = new URLSearchParams(param)
    const page = searchParams.get('page') || '0'
    const limit = searchParams.get('limit') || '10'

    const hotels = getWithToken(BackendAdminUri.getAdminHotels + `?page=${page}&limit=${limit}`)

    return {
        hotels
    }
}



export function deleteAction(id: string) {
    const delRes = deleteWithToken(BackendAdminUri.deleteHotel + id)
    return delRes
}