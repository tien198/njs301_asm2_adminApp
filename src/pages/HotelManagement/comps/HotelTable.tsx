import { useLoaderData } from "react-router";
import ReactRouterAwait from "../../../components/ReactRouterAwait";
import IHotel from "../dataModels/interfaces/IHotel";
import HotelRow from "./HotelRow";
import ILoader from "../dataModels/interfaces/ILoader";

export default function HotelTable() {
    const loader: ILoader = useLoaderData()
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
                <ReactRouterAwait resoleve={loader.hotels} fallback={<tr><td>Loading...</td></tr>}>
                    {(hotels: IHotel[] | undefined) =>
                        hotels ? hotels.map(hotel =>
                            <HotelRow key={hotel._id} hotel={hotel} />
                        )
                            : <tr><td>Failed to fetch !</td></tr>
                    }
                </ReactRouterAwait>
            </tbody>
        </table>
    )
}