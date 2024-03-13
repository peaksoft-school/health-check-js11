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

export const USER_ROUTES = [
   {
      path: ROUTES.USER.index,
      element: <Home />,
   },

   {
      path: `${ROUTES.USER.index}${ROUTES.USER.aboutClinic}`,
      element: <AboutClinic />,
   },

   {
      path: `${ROUTES.USER.index}${ROUTES.USER.profile}`,
      element: <Profile />,
   },

   {
      path: `${ROUTES.USER.index}${ROUTES.USER.services}`,
      element: <Services />,
   },

   {
      path: `${ROUTES.USER.index}${ROUTES.USER.doctors}`,
      element: <Doctors />,
   },

   {
      path: `${ROUTES.USER.index}${ROUTES.USER.contacts}`,
      element: <Contacts />,
   },

   {
      path: `${ROUTES.USER.index}${ROUTES.USER.prices}`,
      element: <Prices />,
   },

   {
      path: `${ROUTES.USER.index}${ROUTES.USER.changePassword}`,
      element: <ChangePassword />,
   },

   {
      path: `${ROUTES.USER.index}${ROUTES.USER.records}`,
      element: <Records />,
   },
]
