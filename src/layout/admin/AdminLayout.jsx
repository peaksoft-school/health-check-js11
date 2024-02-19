import { Outlet } from 'react-router-dom'
import AdminHeader from './AdminHeader'

const AdminLayout = () => (
   <>
      <AdminHeader />

      <div style={{ backgroundColor: 'red' }}>
         <Outlet />
      </div>
   </>
)

export default AdminLayout
