import { lazy } from 'react'
import { Navigate } from 'react-router-dom'
import { ROUTES } from './routes'
import Suspense from './Suspense'

const Applications = lazy(
   () => import('../pages/admin/application/Applications')
)
const OnlineAppointments = lazy(
   () => import('../pages/admin/online-appointments/OnlineAppointments')
)
const Patients = lazy(() => import('../pages/admin/patients/Patients'))
const Patient = lazy(() => import('../pages/admin/patient/Patient'))
const Specialists = lazy(() => import('../pages/admin/specialists/Specialists'))
const SpecialistInnerPage = lazy(
   () => import('../pages/admin/specialists/SpecialistInnerPage')
)
const AddNote = lazy(() => import('../pages/admin/specialists/AddNote'))

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
            <SpecialistInnerPage />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.ADD_NOTE}`,
      element: (
         <Suspense>
            <AddNote />
         </Suspense>
      ),
   },
]
