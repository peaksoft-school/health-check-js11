import { Typography, styled, Box } from '@mui/material'
import { AboutClinicImage, SignatureImage } from '../../../assets/images'
import AboutUs from '../../../components/landing/AboutUs'
import { ABOUT_CLINICK_TEXT } from '../../../utils/constants'
import BreadCrumbs from '../../../components/UI/BreadCrumbs'

const AboutClinic = () => {
   window.scrollTo({ top: 0 })
   return (
      <>
         <StyledLine> </StyledLine>

         <StyledContainer>
            <Box>
               <NavigatePathTitle>
                  <BreadCrumbs to="/" before="Главная" text="О клинике" />
               </NavigatePathTitle>
               <Typography className="title-health" variant="h3">
                  Здоровье — самое <span> </span>
                  <Typography className="mark" variant="span">
                     ценное в жизни
                  </Typography>
               </Typography>
               <Box className="image-box">
                  <Box className="block-text">
                     {ABOUT_CLINICK_TEXT}

                     {ABOUT_CLINICK_TEXT}
                  </Box>
                  <Box className="signature-container">
                     <img
                        src={SignatureImage}
                        alt="img"
                        className="signature"
                     />
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
            </Box>
         </StyledContainer>
      </>
   )
}
export default AboutClinic
const StyledContainer = styled(Box)(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   '& .title-health': {
      marginLeft: '7.5rem',
      fontFamily: 'Manrope',
      fontSize: '2.25rem',
      fontWeight: '600',
      lineHeight: 'normal',
      '& > .mark': {
         color: theme.palette.primary.darkGreen,
         fontFamily: 'Manrope',
      },
   },
   '& .image-box': {
      padding: '3.125rem  5rem 0 7.6rem',
      display: 'flex',
      justifyContent: 'space-between',
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
            width: '496px',
            overflow: 'hidden',
            height: '358px',
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
      marginLeft: '50rem',
      '& > .job-title': {
         color: '#048741',
         fontSize: '18px',
         fontFamily: 'Manrope',
      },

      '& .name': {
         fontSize: '18px',
         fontFamily: 'Manrope',
         padding: '0 0 0 6rem',
      },
   },
}))
const StyledLine = styled(Box)(() => ({
   height: '0.7rem',
   backgroundColor: '#CCE9DA',
   marginTop: '15px',
}))
const NavigatePathTitle = styled(Box)(() => ({
   fontSize: '0.875rem',
   fontWeight: '400',
   padding: '2rem 0 0rem 7.6rem',
}))
