import { styled } from '@mui/material'
import { toast } from 'react-toastify'

export const showToast = ({ message, status }) => {
   toast[status](<StyledMessage>{message}</StyledMessage>, {
      autoClose: 3000,
      icon: false,
      style: {
         borderLeft: '10px',
         borderLeftColor: status === 'error' ? 'red' : 'green',
         borderLeftStyle: 'solid',
         borderRadius: 0,
      },
   })
}

const StyledMessage = styled('p')(({ theme }) => ({
   color: theme.palette.primary.darkGrey,
   fontSize: '16px',
   fontWeight: 400,
}))
