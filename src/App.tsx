import { createBrowserRouter, RouterProvider } from 'react-router'

import { AdminAppUri } from './utilities/enums/adminAppUri'

import Root from './pages/Root'
import Dashboard from './pages/dashboard'

import authenRoute from './routes/authen'
import { lazy, Suspense } from 'react'
import Fallback from './components/Fallback'

const HotelManagement = lazy(() => import('./pages/hotelManagement'))

const router = createBrowserRouter([
  {
    path: AdminAppUri.base,
    element: <Root />,
    errorElement:
      <div className='flex justify-center items-center h-screen'>NOT FOUND !</div>,
    // initialize entire app states in hear
    loader: () => import('./pages/Root').then(i => i.loader()),
    children: [
      {
        index: true,
        Component: Dashboard,
        loader: args => import('./pages/dashboard').then(i => i.loader(args))
      },
      {
        path: AdminAppUri.hotelsManagement,
        element: <Suspense fallback={<Fallback />}>
          <HotelManagement />
        </Suspense>,
        loader: () => import('./pages/hotelManagement').then(i => i.loader())
      }
    ]
  },
  authenRoute,
])



export default function App() {
  return (
    <RouterProvider router={router} />
  )
}


