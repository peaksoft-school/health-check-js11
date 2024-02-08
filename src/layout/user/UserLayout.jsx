import { Outlet, useLocation } from 'react-router-dom'
import LandingPage from '../../pages/LandingPage'
import Header from './Header'
import Footer from './Footer'

const UserLayout = () => {
   const location = useLocation()
   const isLandingPage = location.pathname === '/'

   return (
      <>
         {location.pathname !== '/results' && <Header />}
         {isLandingPage && <LandingPage />}
         <Outlet />
         {location.pathname !== '/results' && <Footer />}
      </>
   )
}

export default UserLayout
