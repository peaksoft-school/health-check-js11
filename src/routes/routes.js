/* eslint-disable import/no-cycle */
import AboutClinic from '../pages/user/about-clinic/AboutClinic'
import Services from '../pages/user/services/Services'
import Doctors from '../pages/user/doctors/Doctors'
import Contacts from '../pages/user/contacts/Contacts'
import Prices from '../pages/user/prices/Prices'
import Home from '../pages/home/Home'
import ChangePassword from '../pages/change-password/ChangePassword'
import MyProfile from '../pages/user/profile/Profile'
import Records from '../pages/user/records/Records'
import OnlineAppointments from '../pages/admin/online-appointments/OnlineAppointments'
import Specialists from '../pages/admin/specialists/Specialists'
import Applications from '../pages/admin/application/Applications'
import SpecialistInnerPage from '../pages/admin/specialists/SpecialistInnerPage'
import AddNote from '../pages/admin/specialists/AddNote'

const ADMIN_ROUTES = [
   {
      path: 'admin/online-appointments',
      element: <OnlineAppointments />,
   },
   {
      path: 'specialists',
      element: <Specialists />,
   },

   {
      path: 'specialists/:id',
      element: <SpecialistInnerPage />,
   },
   {
      path: '/admin/specialists/add-note',
      element: <AddNote />,
   },

   {
      path: '/admin/applications',
      element: <Applications />,
   },

   {
      path: '/admin/patients',
      element: <div>patients</div>,
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

const ROLES = {
   ADMIN: 'ADMIN',
   USER: 'USER',
   GUEST: 'GUEST',
}

const ROUTES = {
   USER: {
      INDEX: '/',
      ABOUT_CLINICK: 'about-clinic',
      PROFILE: 'profile',
      SERVICES: 'services',
      DOCTORS: 'doctors',
      CONTACTS: 'contacts',
      PRICES: 'prices',
      CHANGE_PASSWORD: 'change-password',
      RECORDS: 'records',
   },

   ADMIN: {
      INDEX: '/admin',
      PATIENTS: 'patients',
      ID: 'id',
      APPLICATIONS: 'applications',
      SPECIALISTS: 'specialists',
   },
}

export { ROUTES, ROLES, ADMIN_ROUTES, USER_ROUTES }
