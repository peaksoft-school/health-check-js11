import { Typography, styled } from '@mui/material'
import { toast } from 'react-toastify'

export const showToast = ({
   pending,
   message,
   status = 'success',
   duration = 1000,
}) => {
   let borderColor

   switch (status) {
      case 'error':
         borderColor = 'red'
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
