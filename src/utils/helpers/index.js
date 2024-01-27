import { Typography, styled } from '@mui/material'
import { toast } from 'react-toastify'

export const showToast = ({
   message = 'default',
   status = 'default',
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
      },
   })
}

const StyledMessage = styled(Typography)(({ theme }) => ({
   color: theme.palette.primary.darkGrey,
   fontSize: '16px',
   fontWeight: 400,
}))
