import { Typography, styled, Box } from '@mui/material'
import {
   StudyImage,
   DoctorsImage,
   BuildingImage,
   ConferenceImage,
} from '../../assets/images/index'
import { ArrowRightIcon } from '../../assets/icons/index'
import { ABOUT_US } from '../../utils/constants'

const AboutUs = () => (
   <StyledContainer>
      <Box className="box">
         <Typography className="title" variant="h2">
            О нашей клинике
            <Typography variant="span"> “HealthCheck”</Typography>
         </Typography>

         <Box className="about-us">
            <Box className="texts">
               {ABOUT_US}

               <Typography className="read-more">
                  Читать подробнее о клинике <ArrowRightIcon />
               </Typography>
            </Box>

            <Box className="images">
               <img className="building" src={BuildingImage} alt="здание" />

               <Box>
                  <img src={StudyImage} alt="доктора учатся" />

                  <img src={DoctorsImage} alt="доктора" />

                  <img src={ConferenceImage} alt="доктора в конферeнции" />
               </Box>
            </Box>
         </Box>
      </Box>
   </StyledContainer>
)

export default AboutUs

const StyledContainer = styled(Box)(({ theme }) => ({
   padding: '120px',

   '& .box': {
      margin: '0 auto',
      maxWidth: '1600px',
      display: 'flex',
      flexDirection: 'column',
      gap: '50px',

      '& > .title': {
         fontFamily: 'Manrope',
         fontSize: '2.25rem',
         fontWeight: '600',
         lineHeight: 'normal',

         '& > span': {
            color: theme.palette.primary.darkGreen,
         },
      },

      '& > .about-us': {
         display: 'flex',
         justifyContent: 'space-between',
         gap: '50px',

         '& .texts': {
            maxWidth: '32.063rem',

            '& p': {
               fontSize: '1rem',
               fontFamily: 'Manrope',
               fontWeight: '400',
               lineHeight: '160%',
               color: '#4D4E51',
            },

            [theme.breakpoints.down('lg')]: {
               '& p': {
                  fontSize: '0.8rem',
               },
            },

            '& > .read-more': {
               width: '250px',
               color: '#009344',
               fontWeight: '500',
               cursor: 'pointer',
               marginTop: '30px',
            },
         },

         '& > .images': {
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '0.5rem',
            maxWidth: '36.625rem',

            [theme.breakpoints.down('lg')]: {
               width: '33rem',
            },

            '& > .building': {
               maxWidth: '36.625em',
               width: '100%',
               height: 'auto',
               borderRadius: '0.5rem',

               [theme.breakpoints.down('lg')]: {
                  width: '30rem',
               },
            },

            '& > div': {
               display: 'flex',
               gap: '1.625rem',

               '& > img': {
                  width: '173px',
                  height: 'auto',
                  marginTop: '1.25rem',

                  [theme.breakpoints.down('lg')]: {
                     alignItems: 'center',
                     width: '140px',
                  },
               },
            },
         },
      },
   },
}))
