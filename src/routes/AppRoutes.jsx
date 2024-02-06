import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import { ROUTES, ROLES } from '../utils/constants/routes'
import AdminLayout from '../layout/admin/AdminLayout'
import UserLayout from '../layout/user/UserLayout'
import { ADMIN_ROUTES } from './admin-routes'
import { USER_ROUTES } from './user-routes'
import ProtectedRoute from './ProtectedRoute'

const AppRoutes = () => {
   const router = createBrowserRouter([
      {
         path: ROUTES.USER.index,
         element: (
            <ProtectedRoute
               roles={[ROLES.USER, ROLES.GUEST]}
               fallBackPath="/admin"
               Component={<UserLayout />}
            />
         ),

         children: USER_ROUTES,
      },

      {
         path: ROUTES.ADMIN.index,
         element: (
            <ProtectedRoute
               roles={[ROLES.ADMIN]}
               fallBackPath="/"
               Component={<AdminLayout />}
            />
         ),

         children: ADMIN_ROUTES,
      },

      {
         path: '*',
         element: <Navigate to="/" />,
      },
   ])

   return <RouterProvider router={router} />
}

export default AppRoutes
