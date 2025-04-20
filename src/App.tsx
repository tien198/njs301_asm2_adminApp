import { createBrowserRouter, RouterProvider } from 'react-router'

import { AdminAppUri } from './utilities/enums/adminAppUri'

import Root from './pages/Root'
import Dashboard from './pages/dashboard'


const router = createBrowserRouter([
  {
    path: AdminAppUri.base,
    element: <Root />,
    children: [
      {
        index: true,
        element: <Dashboard />,
        loader: args => import('./pages/dashboard').then(i => i.loader(args))
      }
    ]
  }
])



export default function App() {
  return <RouterProvider router={router} />
}


