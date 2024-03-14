import Applications from '../pages/admin/application/Applications'
import OnlineAppointments from '../pages/admin/online-appointments/OnlineAppointments'
import Patients from '../pages/admin/patients/Patients'
import Patient from '../pages/admin/patient/Patient'
import { ROUTES } from './routes'

export const ADMIN_ROUTES = [
   {
      path: ROUTES.ADMIN.INDEX,
      element: <OnlineAppointments />,
   },

   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.PATIENTS}`,
      element: <Patients />,
   },

   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.PATIENTS}/:${ROUTES.ADMIN.ID}`,
      element: <Patient />,
   },

   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.APPLICATIONS}`,
      element: <Applications />,
   },

   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.SPECIALISTS}`,
      element: <div>specialist</div>,
   },
]
