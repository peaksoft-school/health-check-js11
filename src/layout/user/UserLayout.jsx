import { Outlet } from 'react-router-dom'
import LandingPage from '../../pages/LandingPage'
import Header from '../Header'

let fasfkdsf = []

const UserLayout = () => (
   <>
      <Header />
      <LandingPage />
      <Outlet />
   </>
)

export default UserLayout
