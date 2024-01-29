import { Typography, styled } from '@mui/material'
import { toast } from 'react-toastify'

export const showToast = ({
   message = 'Success',
   status = 'success',
   position,
   duration,
   autoClose,
}) => {
   toast[status](<StyledMessage>{message}</StyledMessage>, {
      autoClose,
      icon: false,
      position,
      duration,

      style: {
         borderLeft: '10px',
         borderLeftColor: status === 'error' ? 'red' : 'green',
         borderLeftStyle: 'solid',
         borderRadius: 0,
         boxShadow: '-3px -2px 12px 2px rgba(0,0,0,0.75)',
      },
   })
}

const StyledMessage = styled(Typography)(({ theme }) => ({
   color: theme.palette.primary.darkGrey,
   fontSize: '16px',
   fontWeight: 400,
}))
