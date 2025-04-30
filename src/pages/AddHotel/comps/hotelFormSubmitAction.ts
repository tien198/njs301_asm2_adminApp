import IAddHotelFormFieldsData from "../../../models/interfaces/IHotelForm";
import { BackendAdminUri } from "../../../utilities/enums/backendUri";
import { getJwtToken } from "../../../utilities/localStorageUtils/authenToken";
import { AdminAppUri_Absolute } from "../../../utilities/enums/adminAppUri";
import IErrorResponse from "../../../models/interfaces/IErrorResponse";

export default async function submitForm(hotelFormFieldDatas: IAddHotelFormFieldsData) {
    try {
        const res = await fetch(BackendAdminUri.addHotel, {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'authorization': getJwtToken()
            },
            body: JSON.stringify(hotelFormFieldDatas)
        }
        )
        if (res.ok)
            return window.location.href = AdminAppUri_Absolute.hotelsManagement
        else if (res.status === 401) {
            alert('Unauthorize! Please login admin user!')
            return window.location.href = AdminAppUri_Absolute.login
        }
        else if (res.status === 500) {
            const err: IErrorResponse = await res.json()
            alert(err.message)
        }
        return

    } catch (err: any) {
        console.error(err);

        // 
    }
}