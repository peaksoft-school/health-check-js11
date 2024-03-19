import { styled, Box, Typography } from '@mui/material'
import { DoctorWelcomeImage } from '../../assets/images'
import Button from '../UI/Button'

const Welcome = () => (
   <StyledContainer>
      <Box className="welcome">
         <Box className="texts">
            <StyledTitle variant="h1">
               Добро пожаловать в клинику HealthCheck
            </StyledTitle>

            <StyledDescription>
               Международный Медицинская клиника «HealthCheck — это клиника, в
               которой применяются новейшие диагностические и лечебные
               технологии и ведут прием лучшие специалисты.
            </StyledDescription>

            <StyledButton variant="secondary">оставьте заявку</StyledButton>
         </Box>

         <img className="doctor" src={DoctorWelcomeImage} alt="доктор" />
      </Box>
   </StyledContainer>
)

export default Welcome

const StyledContainer = styled(Box)(({ theme }) => ({
   padding: '30px 120px',

   '& > .welcome': {
      margin: '0 auto',
      maxWidth: '1600px',
      display: 'flex',
      justifyContent: 'space-between',
      gap: '3.438rem',
      alignItems: 'center',

      [theme.breakpoints.down('lg')]: {
         height: 'auto',
         margin: '1.25rem',
      },

      '& > .texts': {
         width: '36.563rem',
         height: '14.313rem',

         [theme.breakpoints.down('lg')]: {
            width: '100%',
         },
      },

      '& > .doctor': {
         width: '580.35px',

         [theme.breakpoints.down('lg')]: {
            width: '100%',
         },
      },
   },
}))

const StyledTitle = styled(Typography)(({ theme }) => ({
   fontSize: '3rem',
   fontWeight: '900',
   lineHeight: '140%',
   backgroundClip: 'text',
   color: 'transparent',
   width: '36.563rem',
   marginBottom: '1.625rem',
   backgroundImage: 'linear-gradient(90deg, #330867 0%, #30CFD0)',
   backgroundSize: '300% 300%',
   animation: 'moveGradient 3.2s infinite',

   '@keyframes moveGradient': {
      '0%': {
         backgroundPosition: '0% 50%',
      },

      '50%': {
         backgroundPosition: '100% 50%',
      },

      '100%': {
         backgroundPosition: '0% 50%',
      },
   },

   [theme.breakpoints.down('lg')]: {
      fontSize: '2rem',
      width: '100%',
   },
}))

const StyledDescription = styled('h1')(({ theme }) => ({
   color: '#222',
   fontFamily: 'Manrope',
   fontSize: '1.125rem',
   fontWeight: '400',
   lineHeight: '130%',
   width: '33rem',

   [theme.breakpoints.down('lg')]: {
      width: '100%',
   },
}))

const StyledButton = styled(Button)(({ theme }) => ({
   '&.MuiButtonBase-root': {
      borderRadius: '1.5rem',
      marginTop: '1.75rem',
      padding: '10px 23px',
      height: '46px',

      '&:hover': {
         padding: '10px 23px',
         height: '46px',
      },
   },

   [theme.breakpoints.down('lg')]: {
      width: '150px',
      height: '38px',
      padding: '0rem',
      fontSize: '10px',
   },
}))
