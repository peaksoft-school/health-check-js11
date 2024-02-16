import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const UserLayout = () => {
   const location = useLocation()

   return (
      <>
         {location.pathname !== '/results' && <Header />}

         <Outlet />

         {location.pathname !== '/results' && <Footer />}
      </>
   )
}

export default UserLayout
