import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import LandingPage from '../pages/LandingPage'
import { routes } from '../utils/constants/routes'
import { PrivateRoute } from './PrivateRoute'
import { ROLES } from '../utils/constants/routes'
import { adminRoutes } from './AdminRoutes'
import AdminLayout from '../layout/admin/AdminLayout'

const AppRoutes = () => {
   const router = createBrowserRouter([
      {
         path: routes.ADMIN.index,
         element: (
            <PrivateRoute
               roles={[ROLES.ADMIN]}
               fallBackPath="/"
               component={<AdminLayout />}
            />
         ),
         children: adminRoutes,
      },
      {
         path: routes.USER.index,
         element: (
            <PrivateRoute
               roles={[ROLES.USER, ROLES.GUEST]}
               fallBackPath="/admin"
               component={<LandingPage />}
            />
         ),
      },

      {
         path: '*',
         element: <Navigate to="/" />,
      },
   ])

   return <RouterProvider routes={router} />
}

export default AppRoutes
