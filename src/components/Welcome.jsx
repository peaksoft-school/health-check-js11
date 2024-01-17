import { styled, Box } from '@mui/material'
import Button from './UI/Button'
import { DoctorImage } from '../assets/images'

const Welcome = () => (
   <Container>
      <Box className="welcome">
         <Box className="texts">
            <StyledTitle>Добро пожаловать в клинику HealthCheck</StyledTitle>

            <StyledDescription>
               Международный Медицинская клиника «HealthCheck — это клиника, в
               которой применяются новейшие диагностические и лечебные
               технологии и ведут прием лучшие специалисты.
            </StyledDescription>

            <StyledButton variant="shortBtn">оставьте заявку</StyledButton>
         </Box>

         <img className="doctor-img" src={DoctorImage} alt="doctor-img" />
      </Box>
   </Container>
)

export default Welcome

const Container = styled('div')(({ theme }) => ({
   display: 'flex',
   justifyContent: 'center',

   '& > .welcome': {
      display: 'flex',
      height: '38.452rem',
      margin: '1.25rem 7.5rem 1.923rem',
      gap: '3.438rem',
      justifyContent: 'space-between',
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

      '& > .doctor-img': {
         width: '580.35px',

         [theme.breakpoints.down('lg')]: {
            width: '100%',
         },
      },
   },
}))

const StyledTitle = styled('h1')(({ theme }) => ({
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

      '&:hover': {
         padding: '10px 23px',
      },
   },

   [theme.breakpoints.down('lg')]: {
      width: '150px',
      height: '38px',
      padding: '0rem',
      fontSize: '10px',
   },
}))
