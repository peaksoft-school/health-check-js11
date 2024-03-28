import { Outlet, useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './Header'
import Footer from './Footer'

const UserLayout = () => {
   const location = useLocation()
   const isChangePassword = location.pathname === '/change-password'
   const { role } = useSelector((state) => state.auth)

   if (role === 'GUEST' && location.pathname === '/profile') {
      return <Navigate to="/" replace />
   }

   return (
      <>
         {!isChangePassword && location.pathname !== '/records' && <Header />}

         <Outlet />

         {!isChangePassword && location.pathname !== '/records' && <Footer />}
      </>
   )
}

export default UserLayout
