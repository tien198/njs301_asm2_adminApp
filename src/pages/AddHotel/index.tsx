import SectionTitle from '../../components/SectionTitle';
import { BackendAdminUri } from '../../utilities/enums/backendUri';
import getWithToken from '../../utilities/fetchWithToken';
import HotelForm from './comps/HotelForm';
import ILoader from './dataModels/interfaces/Iloader';

export default function AddHotel() {
    return (
        <>
            <SectionTitle title='Add Hotel' />
            <div className='p-10 rounded-xl shadow'>
                <HotelForm />
            </div>
        </>
    )
}


export function loader(): ILoader {
    const roomTitles = getWithToken(BackendAdminUri.getRoomTitleList)
    const typeNames = getWithToken(BackendAdminUri.getTypeNamesList)
    return {
        roomTitles, typeNames
    }
}

