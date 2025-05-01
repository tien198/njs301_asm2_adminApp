import { useLoaderData } from "react-router";
import ReactRouterAwait from "../../../components/ReactRouterAwait";
import HotelRow from "./HotelRow";
import ILoader, { LoaderResult } from "../dataModels/interfaces/ILoader";
import Table from "../../../components/tableLayout/Table";
import PaginationInfor from "../../../components/PaginationInfor";

export default function HotelTable() {
    const loader: ILoader = useLoaderData()
    return (
        // child component wraped in <tbody>
        <Table headers={["ID", "Name", "Type", "Title", "City", "Action"]} >
            <tbody>
                <ReactRouterAwait resoleve={loader.hotels} fallback={<tr><td>Loading...</td></tr>}>
                    {(hotels: LoaderResult) =>
                        hotels?.map(hotel =>
                            // <tr>
                            <HotelRow key={hotel._id} hotel={hotel} />
                        )
                        ?? <tr><td colSpan={7}>Not found any Hotel or fetch fail !</td></tr>
                    }
                </ReactRouterAwait>
            </tbody>
            <tfoot>
                <tr>
                    <td colSpan={9} className='text-end'>
                        <PaginationInfor />
                    </td>
                </tr>
            </tfoot>
        </Table>
    )
}