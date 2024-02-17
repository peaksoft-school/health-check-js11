import { Outlet, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
import AdminHeader from './AdminHeader'

const AdminLayout = () => {
   // const navigate = useNavigate()
   // useEffect(() => navigate('/admin/registration'), [])

   return (
      <>
         <AdminHeader />
         <Outlet />
      </>
   )
}

export default AdminLayout
