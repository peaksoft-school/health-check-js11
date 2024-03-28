import { Outlet, useLocation, Navigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Header from './Header'
import Footer from './Footer'
import ChatBot from '../../components/ChatBot'

const UserLayout = () => {
   const location = useLocation()
   const isChangePassword = location.pathname === '/change-password'
   const { role } = useSelector((state) => state.auth)

   if (
      role === 'GUEST' &&
      (location.pathname === '/profile' || location.pathname === '/records')
   ) {
      return <Navigate to="/" replace />
   }

   return (
      <>
         {!isChangePassword && location.pathname !== '/results' && <Header />}

         <Outlet />

         <ChatBot />

         {!isChangePassword && location.pathname !== '/results' && <Footer />}
      </>
   )
}

export default UserLayout
