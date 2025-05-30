import { lazy, Suspense } from "react";
import { RouteObject } from "react-router";

import { AdminAppUri } from "../utilities/enums/adminAppUri";
import Fallback from "../components/Fallback";
import AdminRoot from "../pages/AdminRoot";


const Dashboard = lazy(() => import("../pages/Dashboard"))
const HotelManagement = lazy(() => import('../pages/HotelManagement'))
const AddHotel = lazy(() => import('../pages/AddHotel'))
const RoomManagement = lazy(() => import('../pages/RoomManagement'))
const AddRoom = lazy(() => import('../pages/AddRoom'))
const TransactionManagement = lazy(() => import('../pages/TransactionManagement'))



const adminRouter: RouteObject = {
    path: '/',
    element: <AdminRoot />,
    children: [
        {
            index: true,
            element: <Suspense fallback={<Fallback />}>
                <Dashboard />
            </Suspense>,
            loader: () => import('../pages/Dashboard').then(i => i.loader())
        },
        {
            path: AdminAppUri.hotelsManagement,
            element: <Suspense fallback={<Fallback />}>
                <HotelManagement />
            </Suspense>,
            loader: args => import('../pages/HotelManagement').then(i => i.loader(args))
        },
        {
            path: AdminAppUri.addHotel,
            element: <Suspense fallback={<Fallback />}>
                <AddHotel />
            </Suspense>,
            loader: () => import('../pages/AddHotel').then(i => i.loader())
        },
        {
            path: AdminAppUri.roomsManagement,
            element: <Suspense fallback={<Fallback />}>
                <RoomManagement />
            </Suspense>,
            loader: args => import('../pages/RoomManagement').then(i => i.loader(args))
        },
        {
            path: AdminAppUri.addRoom,
            element: <Suspense fallback={<Fallback />}>
                <AddRoom />
            </Suspense>,
            loader: () => import('../pages/AddRoom').then(i => i.loader())
        },
        {
            path: AdminAppUri.transManagement,
            element: <Suspense fallback={<Fallback />}>
                <TransactionManagement />
            </Suspense>,
            loader: args => import('../pages/TransactionManagement').then(i => i.loader(args))
        }
    ]
}

export default adminRouter
