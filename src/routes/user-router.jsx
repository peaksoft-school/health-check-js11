import AboutHealthCheck from '../components/AboutHealthCheck'
import Doctors from '../components/Doctors'
import Services from '../components/Services'
import Prices from '../components/Prices'
import Contacts from '../components/Contacts'

export const USER_ROUTES = [
   {
      path: '/about',
      element: <AboutHealthCheck />,
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
      path: '/price',
      element: <Prices />,
   },
]
