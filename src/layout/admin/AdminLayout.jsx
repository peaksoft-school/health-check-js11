import { Outlet } from 'react-router-dom'
import LandingPage from '../../pages/LandingPage'
import AdminHeader from '../AdminHeader'

const AdminLayout = () => (
   <>
      <AdminHeader />
      <LandingPage />
      <Outlet />
   </>
)

export default AdminLayout
