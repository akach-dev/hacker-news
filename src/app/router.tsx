import { RouteObject, RouterProvider, createBrowserRouter } from 'react-router-dom'

import { Layout } from '@/layout'
import { HomePage, StoryPage } from '@/pages'

const routes: RouteObject[] = [
  { element: <HomePage />, path: '/' },
  { element: <StoryPage />, path: '/story/:id' },
]

const router = createBrowserRouter([
  {
    children: routes,
    element: <Layout />,
  },
])

export const AppRouter = () => {
  return <RouterProvider router={router} />
}
