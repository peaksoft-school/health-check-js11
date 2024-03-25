import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { ROUTES } from './routes'
import Suspense from './Suspense'

const OnlineAppointments = lazy(
   () => import('../pages/admin/online-appointments/OnlineAppointments')
)
const Applications = lazy(
   () => import('../pages/admin/application/Applications')
)
const Specialists = lazy(() => import('../pages/admin/specialists/Specialists'))
const Specialist = lazy(() => import('../pages/admin/specialist/Specialist'))
const Patients = lazy(() => import('../pages/admin/patients/Patients'))
const Patient = lazy(() => import('../pages/admin/patient/Patient'))

export const ADMIN_ROUTES = [
   {
      path: `${ROUTES.ADMIN.INDEX}`,
      element: (
         <Navigate
            to={`${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.ONLINE_APPOINTMENTS}`}
         />
      ),
   },

   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.ONLINE_APPOINTMENTS}`,
      element: (
         <Suspense>
            <OnlineAppointments />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.PATIENTS}`,
      element: (
         <Suspense>
            <Patients />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.PATIENTS}/:${ROUTES.ADMIN.ID}`,
      element: (
         <Suspense>
            <Patient />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.APPLICATIONS}`,
      element: (
         <Suspense>
            <Applications />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.SPECIALISTS}`,
      element: (
         <Suspense>
            <Specialists />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.SPECIALISTS}/:${ROUTES.ADMIN.ID}`,
      element: (
         <Suspense>
            <Specialist />
         </Suspense>
      ),
   },
]
