import { RouteObject } from 'react-router-dom'

import { SignInForm } from '@/components'
import { DecksPage } from '@/pages'

export const publicRoutes: RouteObject[] = [
  {
    element: <SignInForm />,
    path: '/login',
  },
]
export const privateRoutes: RouteObject[] = [
  {
    element: <DecksPage />,
    path: '/',
  },
]
