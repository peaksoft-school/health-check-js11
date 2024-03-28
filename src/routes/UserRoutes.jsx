import { lazy } from 'react'
import { ROUTES } from './routes'
import DoctorInnerPage from '../pages/user/doctors/DoctorInnerPage'
import Suspense from './Suspense'
import InnerService from '../layout/user/InnerService'

const ChangePassword = lazy(
   () => import('../pages/change-password/ChangePassword')
)
const Home = lazy(() => import('../pages/home/Home'))
const AboutClinic = lazy(() => import('../pages/user/about-clinic/AboutClinic'))
const Contacts = lazy(() => import('../pages/user/contacts/Contacts'))
const Doctors = lazy(() => import('../pages/user/doctors/Doctors'))
const Prices = lazy(() => import('../pages/user/prices/Prices'))
const Profile = lazy(() => import('../pages/user/profile/Profile'))
const Results = lazy(() => import('../pages/user/results/Results'))
const Services = lazy(() => import('../pages/user/services/Services'))

export const USER_ROUTES = [
   {
      path: ROUTES.USER.INDEX,
      element: (
         <Suspense>
            <Home />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.USER.INDEX}${ROUTES.USER.ABOUT_CLINICK}`,
      element: (
         <Suspense>
            <AboutClinic />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.USER.INDEX}${ROUTES.USER.PROFILE}`,
      element: (
         <Suspense>
            <Profile />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.USER.INDEX}${ROUTES.USER.SERVICES}`,
      element: (
         <Suspense>
            <Services />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.USER.SERVICE}/:${ROUTES.ID.ID}`,
      element: (
         <Suspense>
            <InnerService />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.USER.INDEX}${ROUTES.USER.DOCTORS}`,
      element: (
         <Suspense>
            <Doctors />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.USER.INDEX}${ROUTES.USER.CONTACTS}`,
      element: (
         <Suspense>
            <Contacts />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.USER.INDEX}${ROUTES.USER.PRICES}`,
      element: (
         <Suspense>
            <Prices />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.USER.INDEX}${ROUTES.USER.CHANGE_PASSWORD}`,
      element: (
         <Suspense>
            <ChangePassword />
         </Suspense>
      ),
   },

   {
      path: `${ROUTES.USER.INDEX}${ROUTES.USER.RECORDS}`,
      element: (
         <Suspense>
            <Results />
         </Suspense>
      ),
   },
   {
      path: `${ROUTES.USER.DOCTORS}/:${ROUTES.ID.ID}`,
      element: <DoctorInnerPage />,
   },
]
