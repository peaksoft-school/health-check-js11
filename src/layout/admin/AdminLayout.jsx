import { Outlet } from 'react-router-dom'
import { Box, styled } from '@mui/material'
import AdminHeader from './AdminHeader'

const AdminLayout = () => (
   <>
      <AdminHeader />

      <StyledContainer>
         <Outlet />
      </StyledContainer>
   </>
)

export default AdminLayout

const StyledContainer = styled(Box)(() => ({
   backgroundColor: '#F5F5F5',
   padding: '34px 70px',
}))
