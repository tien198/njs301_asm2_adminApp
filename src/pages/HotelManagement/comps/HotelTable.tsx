import { useLoaderData } from "react-router";
import ReactRouterAwait from "../../../components/ReactRouterAwait";
import HotelRow from "./HotelRow";
import ILoader, { LoaderResult } from "../dataModels/interfaces/ILoader";
import Table from "../../../components/tableLayout/Table";

export default function HotelTable() {
    const loader: ILoader = useLoaderData()
    return (
        // child component wraped in <tbody>
        <Table headers={["ID", "Name", "Type", "Title", "City", "Action"]} >
            <ReactRouterAwait resoleve={loader.hotels} fallback={<tr><td>Loading...</td></tr>}>
                {(hotels: LoaderResult) =>
                    hotels ? hotels.map(hotel =>
                        <HotelRow key={hotel._id} hotel={hotel} />
                    )
                        : <tr><td>Failed to fetch !</td></tr>
                }
            </ReactRouterAwait>
        </Table>
    )
}