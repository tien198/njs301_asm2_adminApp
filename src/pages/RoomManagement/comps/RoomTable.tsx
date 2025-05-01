import { useLoaderData } from "react-router";
import ReactRouterAwait from "../../../components/ReactRouterAwait";
import Table from "../../../components/tableLayout/Table";
import ILoader from "../dataModels/interfaces/ILoader";
import { LoaderResult } from "../dataModels/interfaces/ILoader";
import RoomRow from "./RoomRow";
import PaginationInfor from "../../../components/PaginationInfor";

export default function RoomTable() {
    const loader: ILoader = useLoaderData()
    return (
        <Table headers={['Id', 'Description', 'Max People', 'Price', 'Room Numbers', 'Title', 'Action']}>
            <tbody>
                <ReactRouterAwait resoleve={loader.rooms} fallback={<tr><td>Loading...</td></tr>}>
                    {(rooms: LoaderResult) => rooms?.map(room =>
                        <RoomRow key={room._id} room={room} />
                    )
                        ?? <tr><td colSpan={8}>Not found any Room or fetch fail !</td></tr>
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
