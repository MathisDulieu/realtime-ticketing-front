import { createBrowserRouter } from 'react-router-dom'
import ErrorLayout from '../components/layout/ErrorLayout'
import MainLayout from '../components/layout/MainLayout'
import HomePage from '../pages/HomePage'
import NotFoundPage from '../pages/NotFoundPage'

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    errorElement: (
      <ErrorLayout>
        <NotFoundPage />
      </ErrorLayout>
    ),
    children: [
      {
        path: '/',
        element: <HomePage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
])
