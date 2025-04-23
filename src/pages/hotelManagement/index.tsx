import { useLoaderData } from "react-router";
import HotelRow from "./comps/HotelRow";

export default function HotelList {
    const loader = useLoaderData()

    return (
        <table className="w-full text-sm mt-4">
            <thead className="text-left bg-gray-100">
                <tr>
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
                {loader.map((hotel) => (
                    <HotelRow key={hotel.id} {...hotel} />
                ))}
            </tbody>
        </table>
    );
}


export function loader (){
    
}