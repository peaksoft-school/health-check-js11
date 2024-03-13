import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES, ROLES, USER_ROUTES, ADMIN_ROUTES } from './routes'
import AdminLayout from '../layout/admin/AdminLayout'
import UserLayout from '../layout/user/UserLayout'
import ProtectedRoute from './ProtectedRoute'
import NotFound from '../pages/not-found/NotFound'

const AppRoutes = () => {
   const router = createBrowserRouter([
      {
         path: ROUTES.USER.index,
         element: (
            <ProtectedRoute
               roles={[ROLES.GUEST, ROLES.USER]}
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
         element: <NotFound />,
      },
   ])

   return <RouterProvider router={router} />
}

export default AppRoutes
