import IErrorResponse from "../../../models/interfaces/IErrorResponse";
import IRoomForm from "../../../models/interfaces/IRoomForm";
import { AdminAppUri_Absolute } from "../../../utilities/enums/adminAppUri";
import { BackendAdminUri } from "../../../utilities/enums/backendUri";
import { getJwtToken } from "../../../utilities/localStorageUtils/authenToken";

export default async function submitForm(roomFormFieldDatas: IRoomForm) {
    // convert roomNumbers from string to array
    const formDatas = {
        ...roomFormFieldDatas,
        roomNumbers: roomFormFieldDatas.roomNumbers.split(',').map((roomNumber: string) => roomNumber.replace(/\s+/g, ''))
    }
    
    try {
        const res = await fetch(BackendAdminUri.addRoom, {
            method: 'post',
            headers: {
                'content-type': 'application/json',
                'authorization': getJwtToken()
            },
            body: JSON.stringify(formDatas)
        })
        if (res.ok)
            return window.location.href = AdminAppUri_Absolute.roomsManagement
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
        console.error(err)
    }

}