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
                    <Link to={AdminAppUri_Absolute.base} className="flex items-center gap-4 text-sm text-purple-700">
                        <FaHome /> <span>Dashboard</span>
                    </Link>
                </div>

                <div>
                    <p className="text-gray-400 text-xs mb-2">LISTS</p>
                    <ul className="space-y-2 text-sm">
                        <li><span className="flex items-center gap-4 text-purple-700"><FaUser /> Users</span></li>
                        <li><Link to={AdminAppUri_Absolute.hotelsManagement} className="flex items-center gap-4 text-purple-700"><FaHotel /> Hotels</Link></li>
                        <li><Link to={AdminAppUri_Absolute.roomsManagement} className="flex items-center gap-4 text-purple-700"><FaHotel /> Rooms</Link></li>
                        <li><Link to={AdminAppUri_Absolute.transManagement} className="flex items-center gap-4 text-purple-700"><FaHotel /> Transactions</Link></li>
                    </ul>
                </div>

                <div>
                    <p className="text-gray-400 text-xs mb-2">NEW</p>
                    <ul className="space-y-2 text-sm">
                        <li ><Link to={AdminAppUri_Absolute.addHotel} className="flex items-center gap-4 text-purple-700"><FaPlus /> New Hotel</Link></li>
                        <li ><Link to={AdminAppUri_Absolute.addRoom} className="flex items-center gap-4 text-purple-700"><FaPlus /> New Room</Link></li>
                    </ul>
                </div>

                <div>
                    <p className="text-gray-400 text-xs mb-2">USER</p>
                    <Link to={AdminAppUri_Absolute.logout} className="flex items-center gap-4 text-sm text-purple-700"><FaSignOutAlt /> Logout</Link>
                </div>
            </div>
        </div>
    );
}
