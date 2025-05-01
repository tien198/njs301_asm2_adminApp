import ITransaction from '../dataModels/interfaces/ITransaction';
import ReactRouterAwait from '../../../components/ReactRouterAwait';
import ExternalLib from '../../../utilities/ExternalLib'
import StatusBadge from '../../../components/StatusBage';
import Table from '../../../components/tableLayout/Table';
import PaginationInfor from '../../../components/PaginationInfor';



type props = {
    transactions: Promise<ITransaction[]>
}

export default function TransactionTable({ transactions }: props) {
    return (
        <div className="p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Latest Transactions</h2>
            <Table headers={['ID', 'User', 'Hotel', 'Room', 'Date', 'Price', 'Payment Method', 'Status']}>
                <tbody>
                    <ReactRouterAwait resoleve={transactions} fallback={<tr><td colSpan={9} className='text-center p-7'>Loading...</td></tr>}>
                        {(trans: ITransaction[]) =>
                            trans?.map((tran) => (
                                <tr key={tran._id} className="border-b h-16 border-gray-400 hover:bg-gray-100">
                                    <td><input type="checkbox" /></td>
                                    <td>{tran._id}</td>
                                    <td>{tran.user.userName}</td>
                                    <td>{tran.hotelRef?.name}</td>
                                    <td>{tran.rooms.reduce((acc, curr) => acc + (acc ? ', ' : '') + ExternalLib.toString(curr.roomNumbers), '')}</td>
                                    <td>{new Date(tran.startDate).toLocaleDateString() + ' - ' + new Date(tran.endDate).toLocaleDateString()}</td>
                                    <td>{tran.price}</td>
                                    <td>{tran.payment}</td>
                                    <td><StatusBadge status={tran.status} /></td>
                                </tr>
                            ))
                            ?? <tr><td colSpan={9} className='text-center p-7'>Not found transactions</td></tr>
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
        </div>
    )
}