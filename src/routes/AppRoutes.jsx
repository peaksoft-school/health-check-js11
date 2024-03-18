import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { ROUTES, ROLES } from './routes'
import AdminLayout from '../layout/admin/AdminLayout'
import UserLayout from '../layout/user/UserLayout'
import ProtectedRoute from './ProtectedRoute'
import NotFound from '../pages/not-found/NotFound'
import { USER_ROUTES } from './UserRoutes'
import { ADMIN_ROUTES } from './AdminRoutes'

const AppRoutes = () => {
   const router = createBrowserRouter(
      [
         {
            path: ROUTES.USER.INDEX,
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
            path: ROUTES.ADMIN.INDEX,
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
      ],
      { basename: '/' }
   )

   return <RouterProvider router={router} />
}

export default AppRoutes
