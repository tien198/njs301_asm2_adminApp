import { useLoaderData } from "react-router";
import ReactRouterAwait from "../../../components/ReactRouterAwait";
import IHotel from "../dataModels/interfaces/IHotel";
import HotelRow from "./HotelRow";
import Fallback from "../../../components/Fallback";

export default function HotelTable() {
    const loader = useLoaderData()
    return (
        <table className="w-full text-sm mt-4">
            <thead className="text-left bg-gray-100">
                <tr className="h-14">
                    <th><input type="checkbox" /></th>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Type</th>
                    <th>Title</th>
                    <th>City</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <ReactRouterAwait resoleve={loader}>{hotels =>
                    hotels ? hotels.map((hotel: IHotel) =>
                        <HotelRow key={hotel._id} hotel={hotel} />
                    )
                        : <Fallback />
                }
                </ReactRouterAwait>
            </tbody>
        </table>
    )
}