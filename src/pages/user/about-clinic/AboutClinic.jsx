import { Typography, styled, Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { AboutClinicImage } from '../../../assets/images'
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
            <Typography className="text">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor
               <br />
               incididunt ut labore et dolore magna aliqua. Ut enim ad minim
               veniam, quis
               <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex ea
               commodo consequat.
               <br />
               Duis aute irure dolor in reprehenderit in voluptate velit esse
               cillum dolore eu
               <br />
               fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
               proident, sunt in
               <br />
               culpa qui officia deserunt mollit anim id est laborum
            </Typography>
            <Typography>
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
               eiusmod tempor
               <br />
               incididunt ut labore et dolore magna aliqua. Ut enim ad minim
               veniam, quis
               <br /> nostrud exercitation ullamco laboris nisi ut aliquip ex ea
               commodo consequat.
               <br />
               Duis aute irure dolor in reprehenderit in voluptate velit esse
               cillum dolore eu
               <br />
               fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
               proident, sunt in
               <br />
               culpa qui officia deserunt mollit anim id est laborum
            </Typography>
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
      padding: '3.125rem  0 0 11.25rem',
      display: 'block',
      justifyContent: 'flex-start',
      marginLeft: '-4.50rem',

      '& .text': {
         marginBottom: '2.50rem',
      },
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
