import AboutClinic from '../pages/user/about-clinic/AboutClinic'
import Services from '../pages/user/services/Services'
import Doctors from '../pages/user/doctors/Doctors'
import Contacts from '../pages/user/contacts/Contacts'
import Prices from '../pages/user/prices/Prices'
import Home from '../pages/home/Home'
import ChangePassword from '../pages/change-password/ChangePassword'
import MyProfile from '../pages/user/myProfile/MyProfile'
import Records from '../pages/user/records/Records'
import OnlineAppointments from '../pages/admin/online-appointments/OnlineAppointments'
import Patients from '../pages/admin/patients/Patients'
import PatientsInnerPage from '../pages/admin/patients/PatientsInnerPage'
import Applications from '../pages/admin/application/Applications'

const ADMIN_ROUTES = [
   {
      path: '/admin',
      element: <OnlineAppointments />,
   },

   {
      path: '/admin/patients',
      element: <Patients />,
   },

   {
      path: 'patients/:id',
      element: <PatientsInnerPage />,
   },

   {
      path: '/admin/applications',
      element: <Applications />,
   },

   {
      path: '/admin/specialists',
      element: <div>specialist</div>,
   },
]

const USER_ROUTES = [
   {
      path: '/',
      element: <Home />,
   },

   {
      path: '/about-clinic',
      element: <AboutClinic />,
   },

   {
      path: '/services',
      element: <Services />,
   },

   {
      path: '/doctors',
      element: <Doctors />,
   },

   {
      path: '/contacts',
      element: <Contacts />,
   },

   {
      path: '/prices',
      element: <Prices />,
   },

   {
      path: '/change-password',
      element: <ChangePassword />,
   },

   {
      path: '/profile',
      element: <MyProfile />,
   },

   {
      path: '/records',
      element: <Records />,
   },
]

const ROUTES = {
   USER: {
      index: '/',
   },

   ADMIN: {
      index: '/admin',
   },
}

const ROLES = {
   ADMIN: 'ADMIN',
   USER: 'USER',
   GUEST: 'GUEST',
}

export { ROUTES, ROLES, ADMIN_ROUTES, USER_ROUTES }
