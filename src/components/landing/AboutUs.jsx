import { Typography, styled, Box } from '@mui/material'
import { NavLink } from 'react-router-dom'
import {
   StudyImage,
   DoctorsImage,
   BuildingImage,
   ConferenceImage,
} from '../../assets/images/index'
import { ArrowRightIcon } from '../../assets/icons/index'
import { ABOUT_US } from '../../utils/constants'
import Button from '../UI/Button'

const AboutUs = ({ variant }) => (
   <StyledContainer>
      <Box className="box">
         <Typography className="title" variant="h2">
            О нашей клинике
            <Typography variant="span"> “HealthCheck”</Typography>
         </Typography>

         <Box className="about-us">
            <Box className="texts">
               {ABOUT_US}

               {variant === 'component' ? (
                  <Button className="consultation" variant="secondary">
                     Записаться на консультацию
                  </Button>
               ) : (
                  <NavLink to="/about-clinic" className="navlink">
                     <Typography className="read-more">
                        Читать подробнее о клинике <ArrowRightIcon />
                     </Typography>
                  </NavLink>
               )}
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

   '& .consultation': {
      marginTop: '15px',
      height: '2.5rem',

      '&:hover': {
         border: '1px solid #048741',
      },
   },

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
            '& .navlink': {
               color: '#009344',
               textDecoration: 'none',

               '& > .read-more': {
                  width: '250px',
                  color: '#009344',

                  fontWeight: '500',
                  cursor: 'pointer',
                  marginTop: '30px',
               },
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
               justifyContent: 'space-between',
               width: '100%',

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
