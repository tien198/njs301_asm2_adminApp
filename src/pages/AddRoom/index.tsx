import SectionTitle from "../../components/SectionTitle";
import { BackendAdminUri } from "../../utilities/enums/backendUri";
import getWithToken from "../../utilities/fetchWithToken";
import { initialLoaderAdminPages } from "../AdminRoot";
import RoomForm from "./comps/RoomForm";
import ILoader from "./dataModels/interfaces/ILoader";

export default function AddRoom() {
    return (<>
        <SectionTitle title='Add Room' />
        <div className='p-10 rounded-xl shadow'>
            <RoomForm />
        </div>
    </>)
}


export function loader(): ILoader {
    initialLoaderAdminPages()
    
    const hotels = getWithToken(BackendAdminUri.getHotelNamesList)
    return {
        hotels: hotels
    }
}