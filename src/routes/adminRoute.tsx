import { lazy, Suspense } from "react";
import { Outlet, RouteObject } from "react-router";
import Fallback from "../components/Fallback";
import { AdminAppUri } from "../utilities/enums/adminAppUri";
import Sidebar from "../components/Sidebar";


const Dashboard = lazy(() => import("../pages/dashboard"))
const HotelManagement = lazy(() => import('../pages/hotelManagement'))
const AddHotel = lazy(() => import('../pages/addHotel'))



const adminRouter: RouteObject = {
    path: '/',
    element: <AdminRoot />,
    children: [
        {
            index: true,
            element: <Suspense fallback={<Fallback />}>
                <Dashboard />
            </Suspense>,
            loader: args => import('../pages/dashboard').then(i => i.loader(args))
        },
        {
            path: AdminAppUri.hotelsManagement,
            element: <Suspense fallback={<Fallback />}>
                <HotelManagement />
            </Suspense>,
            loader: () => import('../pages/hotelManagement').then(i => i.loader())
        },
        {
            path: AdminAppUri.addHotel,
            element: <Suspense fallback={<Fallback />}>
                <AddHotel />
            </Suspense>
        }
    ]
}

export default adminRouter




function AdminRoot() {
    return (
        <>
            <Sidebar />
            <div className="flex">
                <div className="w-72"></div>
                <div className="w-full p-9">
                    <Outlet />
                </div>
            </div>
        </>
    )
}