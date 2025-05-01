import { Link } from "react-router"
import { IRoom } from "../dataModels/interfaces/ILoader"

type props = {
    room: IRoom
}

export default function RoomRow({ room }: props) {
    return (
        <tr>
            <td><input type="checkbox" /></td>
            <td>{room._id}</td>
            <td>{room.desc}</td>
            <td>{room.maxPeople}</td>
            <td>{room.price}</td>
            <td>{room.roomNumbers?.join(', ')}</td>
            <td>{room.title}</td>
            <td><Link to={''} className="text-red-500 border border-red-500 px-2 py-1 rounded hover:bg-red-100">Delete</Link></td>
        </tr>
    )
}