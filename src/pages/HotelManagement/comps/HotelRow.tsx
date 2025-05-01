import { Link } from "react-router";
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
            <td><Link to={''} className="text-red-500 border border-red-500 px-2 py-1 rounded hover:bg-red-100">Delete</Link></td>
        </tr>
    );
}
