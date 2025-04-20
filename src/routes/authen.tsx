import { Outlet, RouteObject } from 'react-router';
import Login from '../pages/authentication/Login';

const authenRouter: RouteObject = {
    path: '/authen',
    element: <><Outlet /></>,
    children: [
        {
            path: 'login',
            element: <Login />,
            action: args => import('../pages/authentication/Login').then(i => i.action(args)),
        },
        {
            path: 'logout',
            loader: () => import('../pages/authentication/Logout').then(i => i.action()),
        }
    ]
}

export default authenRouter