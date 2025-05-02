import StatusBadge from "../../../components/StatusBage"
import { ITransaction } from "../dataModels/interfaces/ILoader"

type props = {
    tran: ITransaction
}

export default function TransRow({ tran }: props) {
    const roomNumsArr = tran.rooms?.map(r => r.roomNumbers.join(', '))
    const roomNums = roomNumsArr?.join(', ') ?? 'N/A'

    const bookingDate = tran.startDate && tran.endDate
        && new Date(tran.startDate).toLocaleDateString() + ' - ' + new Date(tran.endDate).toLocaleDateString()

    return (
        <tr>
            <td><input type="checkbox" /></td>
            <td>{tran._id}</td>
            <td>{tran.user?.userName}</td>
            <td>{tran.hotelRef?.name}</td>
            <td>{roomNums}</td>
            <td>{bookingDate}</td>
            <td>{tran.price}</td>
            <td>{tran.payment}</td>
            <td><StatusBadge status={tran.status} /></td>
        </tr>
    )
}