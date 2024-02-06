import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'

const AdminLayout = () => (
   <>
      <AdminHeader />
      <Outlet />
   </>
)

export default AdminLayout
