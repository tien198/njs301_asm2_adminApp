import { Outlet, RouteObject } from 'react-router';

import { AdminAppUri } from '../utilities/enums/adminAppUri'
import Login from '../pages/authentication/Login';

const authenRouter: RouteObject = {
    path: '/authen',
    element: <><Outlet /></>,
    children: [
        {
            path: AdminAppUri.login,
            element: <Login />,
            action: args => import('../pages/authentication/Login').then(i => i.action(args)),
        },
        {
            path: AdminAppUri.logout,
            loader: () => import('../pages/authentication/Logout').then(i => i.action()),
        }
    ]
}

export default authenRouter