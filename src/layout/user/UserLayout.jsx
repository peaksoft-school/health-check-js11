import { Outlet, useLocation } from 'react-router-dom'
import Header from './Header'
import Footer from './Footer'

const UserLayout = () => {
   const location = useLocation()
   const isChangePassword = location.pathname === '/change-password'

   return (
      <>
         {!isChangePassword && location.pathname !== '/results' && <Header />}

         <Outlet />

         {!isChangePassword && location.pathname !== '/results' && <Footer />}
      </>
   )
}

export default UserLayout
