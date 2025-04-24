import { FaHotel, FaUser, FaSignOutAlt, FaPlus, FaHome } from "react-icons/fa";
import { Link } from "react-router";
import { AdminAppUri_Absolute } from "../utilities/enums/adminAppUri";



export default function Sidebar() {
    return (
        <div className="w-64 pl-6 shadow h-screen fixed top-0 left-0">
            <h1 className="text-xl font-bold text-purple-700 h-24 flex justify-center items-center">Admin Page</h1>
            <div className="flex flex-col gap-7 mt-5">
                <div>
                    <p className="text-gray-400 text-xs mb-2">MAIN</p>
                    <button className="flex items-center space-x-2 text-sm text-purple-700">
                        <FaHome /> <span>Dashboard</span>
                    </button>
                </div>

                <div>
                    <p className="text-gray-400 text-xs mb-2">LISTS</p>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center space-x-2 text-purple-700"><FaUser /> <span>Users</span></li>
                        <li className="flex items-center space-x-2 text-purple-700"><FaHotel /> <Link to={AdminAppUri_Absolute.hotelsManagement}>Hotels</Link></li>
                        <li className="flex items-center space-x-2 text-purple-700"><FaHotel /> <span>Rooms</span></li>
                        <li className="flex items-center space-x-2 text-purple-700"><FaHotel /> <span>Transactions</span></li>
                    </ul>
                </div>

                <div>
                    <p className="text-gray-400 text-xs mb-2">NEW</p>
                    <ul className="space-y-2 text-sm">
                        <li className="flex items-center space-x-2 text-purple-700"><FaPlus /> <span>New Hotel</span></li>
                        <li className="flex items-center space-x-2 text-purple-700"><FaPlus /> <span>New Room</span></li>
                    </ul>
                </div>

                <div>
                    <p className="text-gray-400 text-xs mb-2">USER</p>
                    <button className="flex items-center space-x-2 text-sm text-purple-700">
                        <FaSignOutAlt /> <span>Logout</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
