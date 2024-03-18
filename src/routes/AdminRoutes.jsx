import Applications from '../pages/admin/application/Applications'
import OnlineAppointments from '../pages/admin/online-appointments/OnlineAppointments'
import Patients from '../pages/admin/patients/Patients'
import Patient from '../pages/admin/patient/Patient'
import { ROUTES } from './routes'
import Specialists from '../pages/admin/specialists/Specialists'
import SpecialistInnerPage from '../pages/admin/specialists/SpecialistInnerPage'
import AddNote from '../pages/admin/specialists/AddNote'

export const ADMIN_ROUTES = [
   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.ONLINE_APPOINTMENTS}`,
      element: <OnlineAppointments />,
   },

   {
      path: `${ROUTES.ADMIN.INDEX}`,
      element: <h1>hello</h1>,
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
      element: <Specialists />,
   },

   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.SPECIALISTS}/:${ROUTES.ADMIN.ID}`,
      element: <SpecialistInnerPage />,
   },

   {
      path: `${ROUTES.ADMIN.INDEX}/${ROUTES.ADMIN.ADD_NOTE}`,
      element: <AddNote />,
   },
]
