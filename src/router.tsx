import { RouterProvider, createBrowserRouter } from 'react-router-dom'

const router = createBrowserRouter([
  {
    element: <div>Hello</div>,
    path: '/',
  },
])

export const Router = () => {
  return <RouterProvider router={router} />
}
