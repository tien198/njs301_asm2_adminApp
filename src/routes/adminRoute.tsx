import { lazy, Suspense } from "react";
import { RouteObject } from "react-router";

import { AdminAppUri } from "../utilities/enums/adminAppUri";
import Fallback from "../components/Fallback";
import AdminRoot from "../pages/AdminRoot";


const Dashboard = lazy(() => import("../pages/Dashboard"))
const HotelManagement = lazy(() => import('../pages/HotelManagement'))
const AddHotel = lazy(() => import('../pages/AddHotel'))



const adminRouter: RouteObject = {
    path: '/',
    element: <AdminRoot />,
    // initialize entire app states in hear
    loader: () => import('../pages/AdminRoot').then(i => i.loader()),
    children: [
        {
            index: true,
            element: <Suspense fallback={<Fallback />}>
                <Dashboard />
            </Suspense>,
            loader: args => import('../pages/Dashboard').then(i => i.loader(args))
        },
        {
            path: AdminAppUri.hotelsManagement,
            element: <Suspense fallback={<Fallback />}>
                <HotelManagement />
            </Suspense>,
            loader: () => import('../pages/HotelManagement').then(i => i.loader())
        },
        {
            path: AdminAppUri.addHotel,
            element: <Suspense fallback={<Fallback />}>
                <AddHotel />
            </Suspense>,
            loader: () => import('../pages/AddHotel').then(i => i.loader())
        }
    ]
}

export default adminRouter
