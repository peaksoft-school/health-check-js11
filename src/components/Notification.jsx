import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify'
import { styled } from '@mui/material'

const Notification = () => (
   <StyledToastContainer icon={false} position="top-left" autoClose={1000} />
)
export default Notification

const StyledToastContainer = styled(ToastContainer)(() => ({
   '& .Toastify__toast--error': {
      backgroundColor: '#FFF9F8',
   },
   '& .Toastify__toast--success': {
      backgroundColor: '#F6FBFF',
   },
   '& .Toastify__progress-bar--success': {
      backgroundColor: '#F6FBFF',
   },
   '& .Toastify__progress-bar--error': {
      backgroundColor: '#FFF9F8',
   },
   '& .Toastify__close-button > svg ': {
      display: 'none',
   },
}))
