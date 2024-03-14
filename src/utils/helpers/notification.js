import { Typography, styled } from '@mui/material'
import { toast } from 'react-toastify'

export const showToast = ({
   pending,
   message = 'Success',
   status = 'success',
   duration = 2000,
}) => {
   let borderColor

   switch (status) {
      case 'error':
         borderColor = 'red'
         break

      case 'warning':
         borderColor = '#f1c40f'
         break

      default:
         borderColor = 'green'
         break
   }

   const style = {
      borderLeft: '10px',
      borderLeftColor: borderColor,
      borderLeftStyle: 'solid',
      borderRadius: 0,
   }

   toast[status](<StyledMessage>{message}</StyledMessage>, {
      icon: false,
      position: 'top-right',
      autoClose: duration,
      pending,
      style,
   })
}

const StyledMessage = styled(Typography)(({ theme }) => ({
   color: theme.palette.primary.darkGrey,
   fontSize: '16px',
   fontWeight: 400,
}))
