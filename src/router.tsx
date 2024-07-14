import {
  Navigate,
  Outlet,
  RouteObject,
  RouterProvider,
  createBrowserRouter,
} from 'react-router-dom'

import { DecksPage } from '@/pages'

const publicRoutes: RouteObject[] = [
  {
    element: <div>Login</div>,
    path: '/login',
  },
]
const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
    path: '/',
  },
]

export const router = createBrowserRouter([
  {
    children: privateRoutes,
    element: <PrivateRoutes />,
  },
  ...publicRoutes,
])

function PrivateRoutes() {
  const isAuthenticated = true

  return isAuthenticated ? <Outlet /> : <Navigate to={'/'} />
}

export const Router = () => {
  return <RouterProvider router={router} />
}
