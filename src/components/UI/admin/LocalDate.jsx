import { Box, Typography, styled } from '@mui/material'

const LocalDate = ({ row }) => {
   return (
      <StyledContainer>
         <Typography className="appointmet-time">
            {row.original.localDate.split('-').reverse().join('.')}
         </Typography>

         <Typography className="appointmet-time">
            {row.original.localTime.slice(0, -3)}
         </Typography>
      </StyledContainer>
   )
}

export default LocalDate

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   flexDirection: 'column',

   '& .appointmet-time': {
      fontSize: '15px',
      fontWeight: '500',
      fontHeight: '1px',
      fontFamily: 'Manrope',
   },
}))
