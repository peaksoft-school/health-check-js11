import { ToastContainer } from 'react-toastify'
import { styled } from '@mui/material'
import 'react-toastify/dist/ReactToastify.css'

const Notification = () => <StyledToastContainer closeOnClick icon={false} />

export default Notification

const StyledToastContainer = styled(ToastContainer)(() => ({
   '& .Toastify__toast--error': {
      backgroundColor: '#FFF9F8',
   },

   '& .Toastify__toast--success': {
      backgroundColor: '#F6FBFF',
   },

   '& .Toastify__toast--warning': {
      backgroundColor: '#F6FBFF',
   },

   '& .Toastify__progress-bar--success': {
      backgroundColor: '#F6FBFF',
   },

   '& .Toastify__progress-bar--error': {
      backgroundColor: '#FFF9F8',
   },

   '& .Toastify__progress-bar--warning': {
      backgroundColor: '#FFF9F8',
   },

   '& .Toastify__toast--pending': {
      backgroundColor: '#FDFDFD',
   },

   '& .Toastify__close-button > svg ': {
      display: 'none',
   },
}))
