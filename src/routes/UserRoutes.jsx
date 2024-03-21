import ChangePassword from '../pages/change-password/ChangePassword'
import Home from '../pages/home/Home'
import AboutClinic from '../pages/user/about-clinic/AboutClinic'
import Contacts from '../pages/user/contacts/Contacts'
import Doctors from '../pages/user/doctors/Doctors'
import Prices from '../pages/user/prices/Prices'
import Profile from '../pages/user/profile/Profile'
import Records from '../pages/user/records/Records'
import Services from '../pages/user/services/Services'
import { ROUTES } from './routes'
import DoctorInnerPage from '../pages/user/doctors/DoctorInnerPage'

export const USER_ROUTES = [
   {
      path: ROUTES.USER.INDEX,
      element: <Home />,
   },

   {
      path: `${ROUTES.USER.INDEX}${ROUTES.USER.ABOUT_CLINICK}`,
      element: <AboutClinic />,
   },

   {
      path: `${ROUTES.USER.INDEX}${ROUTES.USER.PROFILE}`,
      element: <Profile />,
   },

   {
      path: `${ROUTES.USER.INDEX}${ROUTES.USER.SERVICES}`,
      element: <Services />,
   },

   {
      path: `${ROUTES.USER.INDEX}${ROUTES.USER.DOCTORS}`,
      element: <Doctors />,
   },

   {
      path: `${ROUTES.USER.INDEX}${ROUTES.USER.CONTACTS}`,
      element: <Contacts />,
   },

   {
      path: `${ROUTES.USER.INDEX}${ROUTES.USER.PRICES}`,
      element: <Prices />,
   },

   {
      path: `${ROUTES.USER.INDEX}${ROUTES.USER.CHANGE_PASSWORD}`,
      element: <ChangePassword />,
   },

   {
      path: `${ROUTES.USER.INDEX}${ROUTES.USER.RECORDS}`,
      element: <Records />,
   },
   {
      path: `${ROUTES.USER.INDEX}${ROUTES.USER.DOCTORS}/:${ROUTES.USER.DOCTORS_INNER}`,
      element: <DoctorInnerPage />,
   },
]
