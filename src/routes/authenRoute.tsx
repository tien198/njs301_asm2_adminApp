import { Outlet, RouteObject } from 'react-router';

import { AdminAppUri } from '../utilities/enums/adminAppUri'
import Login from '../pages/Authentication/Login';
import SignUp from '../pages/Authentication/Signup';

const authenRouter: RouteObject = {
    path: '/authen',
    element: <><Outlet /></>,
    children: [
        {
            path: AdminAppUri.login,
            element: <Login />,
            action: args => import('../pages/Authentication/Login').then(i => i.action(args)),
        },
        {
            path: AdminAppUri.logout,
            loader: () => import('../pages/Authentication/Logout').then(i => i.action()),
        },
        {
            path: AdminAppUri.signup,
            element: <SignUp />,
            action: args => import('../pages/Authentication/Signup').then(i => i.action(args)),
        },
    ]
}

export default authenRouter