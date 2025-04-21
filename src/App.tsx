import { createBrowserRouter, RouterProvider } from 'react-router'

import { AdminAppUri } from './utilities/enums/adminAppUri'

import Root from './pages/Root'
import Dashboard from './pages/dashboard'

import authenRoute from './routes/authen'


const router = createBrowserRouter([
  {
    path: AdminAppUri.base,
    element: <Root />,
    // initialize entire app states in hear
    loader: () => import('./pages/Root').then(i => i.loader()),
    children: [
      {
        index: true,
        Component: Dashboard,
        loader: args => import('./pages/dashboard').then(i => i.loader(args))
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


