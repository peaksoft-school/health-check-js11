import { Typography, styled } from '@mui/material'
import { toast } from 'react-toastify'
import { CloseIcon } from '../../assets/icons'

export const showToast = ({
   message = 'Success',
   status = 'success',
   position = 'top-right',
   duration = 4000000000000,
}) => {
   toast[status](<StyledMessage>{message}</StyledMessage>, {
      icon: false,
      position,
      autoClose: duration,

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
