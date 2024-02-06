import { Outlet } from 'react-router-dom'
import LandingPage from '../../pages/LandingPage'

const UserLayout = () => (
   <>
      <LandingPage />
      <Outlet />
   </>
)

export default UserLayout
