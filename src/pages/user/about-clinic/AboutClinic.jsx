import { Typography, styled, Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { AboutClinicImage, SignatureImage } from '../../../assets/images'
// eslint-disable-next-line import/no-cycle
import AboutUs from '../../../components/landing/AboutUs'
import BreadCrumbs from '../../../components/UI/BreadCrumbs'

const AboutClinic = () => {
   window.scrollTo({ top: 0 })

   return (
      <>
         <StyledLine> </StyledLine>
         <StyledContainer>
            <Box className="block">
               <NavigatePathTitle>
                  <BreadCrumbs to="/" before="Главная" text="О клинике" />
               </NavigatePathTitle>

               <Typography className="title" variant="h3">
                  Здоровье — самое <span> </span>
                  <Typography className="mark" variant="span">
                     ценное в жизни
                  </Typography>
               </Typography>
            </Box>

            <Box className="image-box">
               <Box className="block-text">
                  <Typography className="text">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor
                     <br />
                     incididunt ut labore et dolore magna aliqua. Ut enim ad
                     minim veniam, quis
                     <br /> nostrud exercitation ullamco laboris nisi ut aliquip
                     ex ea commodo consequat.
                     <br />
                     Duis aute irure dolor in reprehenderit in voluptate velit
                     esse cillum dolore eu
                     <br />
                     fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                     non proident, sunt in
                     <br />
                     culpa qui officia deserunt mollit anim id est laborum
                  </Typography>
                  <Typography className="text">
                     Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                     sed do eiusmod tempor
                     <br />
                     incididunt ut labore et dolore magna aliqua. Ut enim ad
                     minim veniam, quis
                     <br /> nostrud exercitation ullamco laboris nisi ut aliquip
                     ex ea commodo consequat.
                     <br />
                     Duis aute irure dolor in reprehenderit in voluptate velit
                     esse cillum dolore eu
                     <br />
                     fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                     non proident, sunt in
                     <br />
                     culpa qui officia deserunt mollit anim id est laborum
                  </Typography>
               </Box>
               <Box className="signature-container">
                  <img src={SignatureImage} alt="img" className="signature" />
               </Box>
               <Box className="photo-container">
                  <img src={AboutClinicImage} alt="img" className="image" />
               </Box>
            </Box>

            <Box className="name-container">
               <Typography className="job-title">
                  Руководитель клиники Medical Clinic
               </Typography>
               <Typography className="name">Аниса Михаилова</Typography>
            </Box>

            <AboutUs variant="component" />
         </StyledContainer>
      </>
   )
}
export default AboutClinic

const StyledContainer = styled(Box)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',

   '& .block': {
      marginRight: '41rem',
      '& > .title': {
         marginLeft: '6.25rem',
         fontFamily: 'Manrope',
         fontSize: '2.25rem',
         fontWeight: '600',
         lineHeight: 'normal',

         '& > .mark': {
            color: theme.palette.primary.darkGreen,
            fontFamily: 'Manrope',
         },
      },
   },

   '& .image-box': {
      padding: '3.125rem  5rem 0 10rem',
      display: 'flex',
      justifyContent: 'space-between',
      gap: '9rem',

      '& .block-text': {
         display: 'block',
         justifyContent: 'flex-start',
      },

      '& .text': {
         marginBottom: '2.50rem',
         color: '#4D4E51',
         fontSize: '16px',
         fontFamily: 'Manrope',
      },
      '& .photo-container': {
         display: 'flex',
         justifyContent: 'end',
         '& .image': {
            width: '596px',
            height: '438px',
            marginLeft: '-15rem',
         },
      },
      '& .signature-container': {
         display: 'flex',
         justifyContent: 'ceneter',
         '& .signature': {
            width: '112px',
            height: '89px',
            marginTop: '22rem',
            marginLeft: '-17rem',
         },
      },
   },
   '& .name-container': {
      display: 'block',
      justifyContent: 'end',
      padding: '0.5rem  0 0 35.55rem',

      '& .job-title': {
         color: '#048741',
         fontSize: '18px',
         fontFamily: 'Manrope',
      },
      '& .name': {
         fontSize: '18px',
         fontFamily: 'Manrope',
         display: 'flex',
         padding: '0 0 0 6rem',
      },
   },
}))

const StyledSpecialistRow = styled(Box)(() => ({
   fontSize: '0.875rem',
   fontWeight: '400',
   marginLeft: '9.375rem',
   padding: '3.125rem 0 2rem 2rem',
   alignSelf: 'start',

   span: {
      color: '#048741',
      cursor: 'pointer',
   },
}))

const NavLinkStyle = styled(NavLink)(() => ({
   textDecoration: 'none',
   color: '#959595',
}))

const StyledLine = styled(Box)(() => ({
   height: '0.7rem',
   backgroundColor: '#CCE9DA',
   marginTop: '15px',
}))

const NavigatePathTitle = styled(Box)(() => ({
   fontSize: '0.875rem',
   fontWeight: 400,
   padding: '3.125rem 0 2rem 6.5rem',
}))
