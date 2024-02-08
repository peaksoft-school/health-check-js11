import { Typography, styled, Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { NotFoundImage } from '../assets/images'

const NotFound = () => (
   <StyledContainer>
      <img src={NotFoundImage} alt="" />

      <Typography className="title" variant="h3">
         Cтраница не найдена
      </Typography>

      <NavLink className="title link" to="/">
         Вернуться на главную
      </NavLink>
   </StyledContainer>
)

export default NotFound

const StyledContainer = styled(Box)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   justifyContent: 'center',
   height: '100vh',

   '& > img': {
      paddingTop: '3.125rem',
      position: 'relative',
      bottom: '1.875rem',
      width: '56.25rem',
   },

   '& > .title': {
      position: 'relative',
      zIndex: '1000',
      bottom: '4.375rem',
   },

   '& > .link': {
      color: theme.palette.primary.darkGreen,
      textDecoration: 'none',

      '&:hover': {
         textDecoration: 'underline',
      },
   },
}))
