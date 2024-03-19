import { Typography, styled, Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { AboutClinicImage } from '../../../assets/images'
// eslint-disable-next-line import/no-cycle
import AboutUs from '../../../components/landing/AboutUs'

const AboutClinic = () => {
   return (
      <StyledContainer>
         <NavigatePathTitle>
            <p>
               <NavLinkStyle to="/">Главная {' > '}</NavLinkStyle>
               <span>О клинике</span>
            </p>
         </NavigatePathTitle>

         <Typography className="title" variant="h3">
            Здоровье — самое <span> </span>
            <Typography className="mark" variant="span">
               ценное в жизни
            </Typography>
         </Typography>

         <Box className="image-box">
            <img src={AboutClinicImage} alt="clinic-info" />
         </Box>

         <AboutUs variant="component" />
      </StyledContainer>
   )
}

export default AboutClinic

const StyledContainer = styled(Box)(({ theme }) => ({
   '& > .title': {
      marginLeft: '6.25rem',

      '& > .mark': {
         color: theme.palette.primary.darkGreen,
      },
   },

   '& .image-box': {
      padding: '3.125rem 0 0 11.25rem',
      display: 'flex',
      justifyContent: 'center',
   },
}))

const NavigatePathTitle = styled(Box)(() => ({
   fontSize: '0.875rem',
   fontWeight: 400,
   padding: '3.125rem 0 2rem 6.5rem',
   span: {
      color: '#048741',
      cursor: 'pointer',
   },
}))

const NavLinkStyle = styled(NavLink)(() => ({
   textDecoration: 'none',
   color: '#959595',
}))
