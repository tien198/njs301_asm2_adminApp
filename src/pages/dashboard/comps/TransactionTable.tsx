import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import cssMod from './TransactionTable.module.css'
import ITransaction from '../dataModels/ITransaction';
import ReactRouterAwait from '../../../components/ReactRouterAwait';

type status = 'Booked' | 'Checkin' | 'Checkout'


type stateProps = {
    status: status
}

const StatusBadge = ({ status }: stateProps) => {
    const statusMap = {
        Booked: "bg-red-200 text-red-800",
        Checkin: "bg-green-200 text-green-800",
        Checkout: "bg-purple-200 text-purple-800",
    };
    return (
        <span className={`px-3 py-1 text-sm rounded-full ${statusMap[status]}`}>
            {status}
        </span>
    );
};



type tranProps = {
    transactions: Promise<ITransaction[]>
}

export default function TransactionTable({ transactions }: tranProps) {
    return (
        <div className=" p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Latest Transactions</h2>
            <ReactRouterAwait resoleve={transactions}>{(trans: ITransaction[]) =>
                <table className={`w-full text-sm text-left ${cssMod}`}>
                    <thead>
                        <tr className="text-gray-600 border-t border-gray-400">
                            <th></th>
                            <th>ID</th>
                            <th>User</th>
                            <th>Hotel</th>
                            <th>Room</th>
                            <th>Date</th>
                            <th>Price</th>
                            <th>Payment Method</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {trans
                            ? trans.map((tran) => (
                                <tr key={tran._id} className="border-t border-gray-400 hover:bg-gray-100">
                                    <td><input type="checkbox" /></td>
                                    <td>{tran._id}</td>
                                    <td>{tran.user.userName}</td>
                                    <td>{tran.hotelRef?.name}</td>
                                    <td>{tran.rooms.reduce((acc, curr) => acc ? ', ' : acc + curr.roomNumbers, '')}</td>
                                    <td>{new Date(tran.startDate).toLocaleDateString() + ' - ' + new Date(tran.endDate).toLocaleDateString()}</td>
                                    <td>{tran.price}</td>
                                    <td>{tran.payment}</td>
                                    <td><StatusBadge status={tran.status as status} /></td>
                                </tr>
                            ))
                            : <tr><td colSpan={9} className='text-center p-7'>Not found transactions</td></tr>
                        }
                    </tbody>
                    <tfoot >
                        <tr>
                            <td colSpan={9} className='text-end'>
                                <PaginationSimple />
                            </td>
                        </tr>
                    </tfoot>
                </table>
            }
            </ReactRouterAwait>
        </div>
    );
};





function PaginationSimple() {
    return (
        <div className="mt-32 flex items-center justify-end space-x-2 text-sm text-gray-600">
            <span>1–8 of 8</span>

            {/* Nút back (disabled) */}
            <FiChevronLeft className="w-4 h-4 text-gray-400 cursor-not-allowed" />

            {/* Nút next (disabled) */}
            <FiChevronRight className="w-4 h-4 text-gray-400 cursor-not-allowed" />
        </div>
    );
}