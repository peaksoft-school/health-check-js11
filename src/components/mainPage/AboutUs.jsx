import { Typography, styled, Box } from '@mui/material'
import {
   StudyImage,
   DoctorsImage,
   BuildingImage,
   ConferenceImage,
} from '../../assets/images/index'
import { Arrow } from '../../assets/icons/index'
import { ABOUT_US } from '../../utils/constants'

const AboutUs = () => (
   <StyledContainer>
      <Box className="content">
         <StyledTitle variant="h2">
            О нашей клинике
            <Typography variant="p"> “HealthCheck”</Typography>
         </StyledTitle>

         <StyledContent>
            <Box className="text-container">
               {ABOUT_US}

               <StyledReadMore variant="p">
                  Читать подробнее о клинике <Arrow />
               </StyledReadMore>
            </Box>

            <StyledImagesContainer>
               <img className="building" src={BuildingImage} alt="здание" />

               <Box className="images-box">
                  <img
                     className="small-image"
                     src={StudyImage}
                     alt="доктора учатся"
                  />

                  <img
                     className="small-image"
                     src={DoctorsImage}
                     alt="доктора"
                  />

                  <img
                     className="small-image"
                     src={ConferenceImage}
                     alt="доктора в конферeнции"
                  />
               </Box>
            </StyledImagesContainer>
         </StyledContent>
      </Box>
   </StyledContainer>
)

export default AboutUs

const StyledContainer = styled('div')(({ theme }) => ({
   display: 'flex',
   justifyContent: 'center',

   '& .content': {
      display: 'flex',
      flexDirection: 'column',
      gap: '3.75rem',

      [theme.breakpoints.down('lg')]: {
         gap: '2rem',
      },
   },
}))

const StyledTitle = styled(Typography)(({ theme }) => ({
   fontFamily: 'Manrope',
   fontSize: '2.25rem',
   fontWeight: '600',
   lineHeight: 'normal',

   '& .MuiTypography-root': {
      color: theme.palette.primary.darkGreen,
   },

   [theme.breakpoints.down('lg')]: {
      fontSize: '1.8rem',
   },
}))

const StyledContent = styled('div')(({ theme }) => ({
   display: 'flex',
   gap: '6.313rem',
   alignItems: 'stretch',
   height: '34.125rem',

   [theme.breakpoints.down('lg')]: {
      gap: '5rem',
   },

   '& .text-container': {
      display: 'flex',
      flexDirection: 'column',
      maxHeight: '30.875rem',
      maxWidth: '32.063rem',
      width: 'auto',

      '& .MuiTypography-root': {
         fontSize: '1rem',
         fontFamily: 'Manrope',
         fontStyle: 'normal',
         fontWeight: '400',
         lineHeight: '160%',
         color: '#4D4E51',
      },

      [theme.breakpoints.down('lg')]: {
         '& .MuiTypography-root': {
            fontSize: '0.8rem',
         },

         width: '370px',
      },
   },
}))

const StyledImagesContainer = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'center',
   gap: '0.5rem',
   maxWidth: '36.625rem',

   [theme.breakpoints.down('lg')]: {
      width: '33rem',
   },

   '& > div': {
      display: 'flex',
      gap: '1.625rem',
   },

   '& .building': {
      maxWidth: '36.625em',
      width: '100%',
      height: 'auto',
      borderRadius: '0.5rem',

      [theme.breakpoints.down('lg')]: {
         width: '30rem',
      },
   },

   '& .images-box': {
      display: 'flex',
      gap: '1.625rem',

      '& .small-image': {
         width: '173px',
         height: 'auto',
         marginTop: '1.25rem',

         [theme.breakpoints.down('lg')]: {
            alignItems: 'center',
            width: '140px',
         },
      },
   },
}))

const StyledReadMore = styled('a')(({ theme }) => ({
   width: '15.5rem',
   color: '#009344',
   fontWeight: 500,
   textDecoration: 'none',
   cursor: 'pointer',
   paddingTop: '1rem',
   marginTop: '1.4rem',

   [theme.breakpoints.down('lg')]: {
      marginTop: '0.5rem',
      fontSize: '0.8rem',
   },
}))
