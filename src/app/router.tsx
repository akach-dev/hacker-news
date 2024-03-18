import { RouteObject, RouterProvider, createHashRouter } from 'react-router-dom'

import { Layout } from '@/layout'
import { HomePage, StoryPage } from '@/pages'

const routes: RouteObject[] = [
  { element: <HomePage />, path: '/' },
  { element: <StoryPage />, path: '/story/:id' },
]

const router = createHashRouter([
  {
    children: routes,
    element: <Layout />,
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
