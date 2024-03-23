import { Typography, styled, Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { AboutClinicImage } from '../../../assets/images'
// eslint-disable-next-line import/no-cycle
import AboutUs from '../../../components/landing/AboutUs'
import BreadCrumbs from '../../../components/UI/BreadCrumbs'

const AboutClinic = () => {
   return (
      <StyledContainer>
         <NavigatePathTitle>
            <BreadCrumbs to="/" before="Главная" text="О клинике" />
         </NavigatePathTitle>

         <Typography className="title" variant="h3">
            Здоровье — самое <span> </span>
            <Typography className="mark" variant="span">
               ценное в жизни
            </Typography>
         </Typography>

         <Box className="image-box">
            {/* <img src={AboutClinicImage} alt="clinic-info" /> */}
         </Box>

         <AboutUs variant="component" />
      </StyledContainer>
   )
}

export default AboutClinic

const StyledContainer = styled(Box)(({ theme }) => ({
   '& > .title': {
      marginLeft: '6.25rem',
      fontFamily: 'Manrope',
      fontSize: '2.25rem',
      fontWeight: '600',
      lineHeight: 'normal',

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
