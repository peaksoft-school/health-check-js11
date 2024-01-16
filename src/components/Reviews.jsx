import { styled, Typography } from '@mui/material'

const Reviews = () => {
   return (
      <StyledMainContainer>
         <Typography className="title" variant="h2">
            Отзывы наших
            <Typography variant="p" className="mark">
               пациентов
            </Typography>
         </Typography>
      </StyledMainContainer>
   )
}

export default Reviews

const StyledMainContainer = styled('div')(({ theme }) => ({
   '& .title': {
      '& .mark': {
         color: theme.palette.primary.darkGreen,
      },
   },
}))
