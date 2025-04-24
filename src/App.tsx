import { createBrowserRouter, RouterProvider } from 'react-router'

import { AdminAppUri } from './utilities/enums/adminAppUri'

import Root from './pages/AppRoot'

import authenRoute from './routes/authenRoute'
import adminRoute from './routes/adminRoute'



const router = createBrowserRouter([
  {
    path: AdminAppUri.base,
    element: <Root />,
    errorElement:
      <div className='flex justify-center items-center h-screen'>NOT FOUND !</div>,
    // initialize entire app states in hear
    loader: () => import('./pages/AppRoot').then(i => i.loader()),
    children: [
      adminRoute,
      authenRoute,
    ]
  },
])



export default function App() {
  return (
    <RouterProvider router={router} />
  )
}


