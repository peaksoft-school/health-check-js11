import Applications from '../pages/admin/application/Applications'
import OnlineAppointments from '../pages/admin/online-appointments/OnlineAppointments'
import Patient from '../pages/admin/patient/Patient'
import Patients from '../pages/admin/patients/Patients'
import { ROUTES } from './routes'

export const ADMIN_ROUTES = [
   {
      path: ROUTES.ADMIN.index,
      element: <OnlineAppointments />,
   },

   {
      path: `${ROUTES.ADMIN.index}/${ROUTES.ADMIN.patients}`,
      element: <Patients />,
   },

   {
      path: `${ROUTES.ADMIN.index}:${ROUTES.ADMIN.id}`,
      element: <Patient />,
   },

   {
      path: `${ROUTES.ADMIN.index}/${ROUTES.ADMIN.applications}`,
      element: <Applications />,
   },

   {
      path: `${ROUTES.ADMIN.index}/${ROUTES.ADMIN.specialists}`,
      element: <div>specialist</div>,
   },
]
