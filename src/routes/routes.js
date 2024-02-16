import AboutClinic from '../pages/user/about-clinic/AboutClinic'
import Services from '../pages/user/services/Services'
import Doctors from '../pages/user/doctors/Doctors'
import Contacts from '../pages/user/contacts/Contacts'
import Prices from '../pages/user/prices/Prices'
import Home from '../pages/home/Home'

const ADMIN_ROUTES = []

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
