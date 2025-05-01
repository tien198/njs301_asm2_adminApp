import { useLoaderData } from "react-router";
import Table from "../../../components/tableLayout/Table";
import { ILoader, LoaderResult } from "../dataModels/interfaces/ILoader";
import ReactRouterAwait from "../../../components/ReactRouterAwait";
import TransRow from "./TranRow";
import PaginationInfor from "../../../components/PaginationInfor";

export default function TransTable() {
    const loader: ILoader = useLoaderData();
    return (
        <Table headers={['Id', 'User', 'Hotel', 'Room', 'Date', 'Prices', 'Payment Method', 'Status']}>
            <tbody>
                <ReactRouterAwait resoleve={loader.trans} fallback={<tr><td>Loading...</td></tr>}>
                    {(trans: LoaderResult) => trans?.map(tran =>
                        <TransRow key={tran._id} tran={tran} />
                    )
                        ?? <tr><td colSpan={9}>Not found any Transaction or fetch fail !</td></tr>
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
    );
}
