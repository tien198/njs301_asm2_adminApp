import { createBrowserRouter, RouterProvider } from 'react-router'

import { AdminAppUri } from './utilities/enums/adminAppUri'

import Root from './pages/AppRoot'

import authenRoute from './routes/authenRoute'
import adminRoute from './routes/adminRoute'
import ErrorPage from './pages/ErrorPage'



const router = createBrowserRouter([
  {
    path: AdminAppUri.base,
    element: <Root />,
    errorElement: <ErrorPage />,
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


