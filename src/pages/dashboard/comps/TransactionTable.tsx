import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import cssMod from './TransactionTable.module.css'

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



type tran = {
    id: string, user: string, hotel: string, room: string, date: string, price: string, payment: string, status: string
}

type tranProps = {
    transactions: tran[]
}

const TransactionTable = ({ transactions }: tranProps) => {
    return (
        <div className=" p-6 rounded-xl shadow">
            <h2 className="text-xl font-semibold mb-4">Latest Transactions</h2>
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
                    {transactions.map((txn) => (
                        <tr key={txn.id} className="border-t border-gray-400 hover:bg-gray-100">
                            <td><input type="checkbox" /></td>
                            <td>{txn.id}</td>
                            <td>{txn.user}</td>
                            <td>{txn.hotel}</td>
                            <td>{txn.room}</td>
                            <td>{txn.date}</td>
                            <td>{txn.price}</td>
                            <td>{txn.payment}</td>
                            <td><StatusBadge status={txn.status as status} /></td>
                        </tr>
                    ))}
                </tbody>
                <tfoot >
                    <tr>
                        <td colSpan={9} className='text-end'>
                            <PaginationSimple />
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>
    );
};





export default TransactionTable;


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