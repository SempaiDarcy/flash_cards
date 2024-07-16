import { Outlet, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { PrivateRoutes, privateRoutes, publicRoutes } from '@/common'
import { Header } from '@/components'

const AppLayout = () => {
  return (
    <>
      <Header isLoggedIn />
      <Outlet />
    </>
  )
}

export const router = createBrowserRouter([
  {
    children: [
      {
        children: privateRoutes,
        element: <PrivateRoutes />,
      },
      ...publicRoutes,
    ],
    element: <AppLayout />,
    // errorElement: <Navigate to={'/error'} />,
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
