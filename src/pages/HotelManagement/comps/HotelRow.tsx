import IConfirm from "../../../models/interfaces/IDeleleteConfirm";
import store from "../../../store";
import { setModalInfors, setModalType, showModal } from "../../../store/slices/modalSlice";
import { IHotel } from "../dataModels/interfaces/ILoader";

type props = { hotel: IHotel }

export default function HotelRow({ hotel }: props) {

    return (
        <tr>
            <td><input type="checkbox" /></td>
            <td>{hotel?._id}</td>
            <td>{hotel?.name}</td>
            <td>{hotel?.type}</td>
            <td>{hotel?.name}</td>
            <td>{hotel?.city}</td>
            <td>
                <button
                    className="text-red-500 border border-red-500 px-2 py-1 rounded hover:bg-red-100"
                    onClick={() => emitConfirmModal(hotel)}>
                    Delete
                </button>
            </td>
        </tr>
    )
}

function emitConfirmModal(hotel: IHotel) {
    const confirmObj:IConfirm = {
        confirmMsg: `Delete hotel ${hotel?.name} ?`,
        id: hotel?._id,
    }
    store.dispatch(setModalType('confirm'))
    store.dispatch(setModalInfors(confirmObj))
    store.dispatch(showModal())
}
